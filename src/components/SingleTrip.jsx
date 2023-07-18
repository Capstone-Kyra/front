import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SingleTrip(props) {
  const [review, setReview] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAllConnectedTrips() {
      console.log("running fetch allconnectedtrips function");
      try {
        const BASE_URL = `http://localhost:3000`;
        const response = await fetch(`${BASE_URL}/api/reviews/${id}`);

        const translatedData = await response.json();
        console.log("response");
        console.log(translatedData);
        const filteredTrip = translatedData.filter((singleTrip) => {
          console.log("singletrip)");
          console.log(singleTrip.tripId, "id");
          console.log(id);
          if (singleTrip.tripId == id) {
            console.log(singleTrip.location);
            return singleTrip;
          }
        });
        console.log(filteredTrip);
        if (filteredTrip.length) {
          setReview(filteredTrip);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllConnectedTrips();
  }, []);
  // console.log(filteredTrip)
  console.log(review);
  return (
    <div>
      {review.length ? (
        review.map((singleReview) => {
          console.log("single trip:");
          console.log(singleReview);
          return (
            <div key={singleReview.tripId}>
              <h4>Location: {singleReview.location}</h4>
              <h4>Type: {singleReview.type}</h4>
              <p>Description: {singleReview.description}</p>
              <p>Review: {singleReview.text}</p>
              <p>Rating: {singleReview.rating}</p>
              <p>Comments: {singleReview.text}</p>
              <img src={singleReview.picture} alt="trip shown" />
            </div>
          );
        })
      ) : (
        <p>No reviews here!</p>
      )}
      {/* <p>Hello</p> */}

      {/* add singlereview view here */}

      {/* <div className="logged-in">
              < isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} ></div>

             <Link to='/reviews/createReview'><button>Create a Review</button></Link>  */}

      <button onClick={() => navigate("/trips")}> Back </button>
    </div>
  );
}
