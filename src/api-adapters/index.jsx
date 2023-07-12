const BASE_URL = `http://localhost:3000`;

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

export async function registerUser(username, password, email){
    try{
        // console.log(1)
        let response = await fetch(`${BASE_URL}/api/users/register`,{
            method:"POST",
            headers:{
                'Content-Type': "application/json"},
                body: JSON.stringify({
                        username: username,
                        password: password,
                        email: email,
                    
                    }),
                })
        // const response = await fetch(`${BASE_URL}/trips`);
        // console.log(response)
        //     console.log(2)
        const translatedData = await response.json();
        // console.log(3)
        console.log(translatedData)
        return translatedData
    }catch(error){
        console.error(error);
    }

};

// export async function loginUser(username, password){
//     try{
//         let response = await fetch(`${BASE_URL}/api/users/login`,{
//             method:"POST",
//             headers:{
//                 'Content-Type': "application/json",
//             },
//                 body: JSON.stringify({
//                         username: username,
//                         password: password,

//                     }),
//                 })
//             const result = await response.json();
//             console.log(result)
//         return result
//     }catch(error){
//         console.error(error);
//     }

// };