const BASE_URL = `localhost:3000`;

export const getAllTrips = async() => {
    console.log("getalltrips running");
    try {
        const response = await fetch(`${BASE_URL}/api/trips`);
        console.log('response' + response);
        const translatedData = await response.json();
        console.log(translatedData);
        return translatedData;
    } catch(error) {
        console.log(error);
    }
}   