const BASE_URL = `http://localhost:3000`;

export const getAllTrips = async() => {
    try {
        const response = await fetch(`${BASE_URL}/trips`);
        const translatedData = await response.json();
        return translatedData.data.posts;
    } catch(error) {
        console.log(error);
    }
}