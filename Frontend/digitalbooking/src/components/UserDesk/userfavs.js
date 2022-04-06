const user = JSON.parse(localStorage.getItem("data"))
const userId= user && user.id;
const url2 =  `https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/stats/users/${userId}`;
const bearer = user && `${JSON.parse(localStorage.getItem("bearer")).jwt}`;
  const options = {
    headers: {
      Authorization: bearer,
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
  };


async function userfavs() {
    let response = [];
    let data2 = [];  
    try{ 
       response = await (await fetch(url2, options)).text()
       data2= JSON.parse(await response);
    }
    catch(error) {
        console.log(error);
    };

    return data2;
}

export default userfavs();