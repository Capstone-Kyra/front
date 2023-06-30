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

export async function registerUser(username, password){
    try{
        let response = await fetch(`${BASE_URL}/users/register`,{
            method:"POST",
            headers:{
                'content-type': "application/json",},
                body: JSON.stringify({
                    user:{
                        username: username,
                        password: password,
                    },
                    }),
                })
            
        const translatedData = await response.json();
        console.log(translatedData)
        return translatedData
    }catch(error){
        console.error(error);
    }

};

export async function loginUser(username, password){
    try{
        let response = await fetch(`${BASE_URL}/users/login`,{
            method:"POST",
            headers:{
                'content-type': "application/json",
            },
                body: JSON.stringify({
                    user: {
                        username: username,
                        password: password,
                    },
                    }),
                })
            const result = await response.json();
            console.log(result)
        return result
    }catch(error){
        console.error(error);
    }

};