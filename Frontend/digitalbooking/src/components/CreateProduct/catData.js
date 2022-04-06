const user = JSON.parse(localStorage.getItem("data"))
const url2 =  `https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/category`;
const bearer = user && `${JSON.parse(localStorage.getItem("bearer")).jwt}`;
  const options = {
    headers: {
      Authorization: bearer,
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
  };


async function catData() {
    let response = [];
    let data = [];  
    try{ 
       response = await (await fetch(url2, options)).text()
       data= JSON.parse(await response);
    }
    catch(error) {
        console.log(error);
    };

    return data;
}

export default catData();