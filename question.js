const axios = require("axios");
const baseUrl = 'https://swapi.py4e.com/api/';

function getData (url){
  return new Promise( (successCallback, failureCallback) => {
    axios.get(baseUrl + url).then( data => {
        return successCallback(JSON.stringify(data.data));
    }).catch( error => {
        return failureCallback(error);
    });
  });
};


async function main(){
try {
await getData("starships/10").then( data => console.log( data )).catch( err => console.log( err))

await getData("planets").then( data => console.log(data)).catch( err => console.log(err))
await getData("planets/6").then( data => console.log(data)).catch( err => console.log(err))

await getData("people").then( data => console.log(data)).catch( err => console.log(err))
await getData("people/?search=Leia Organa").then( data => console.log(data)).catch( err => console.log(err))

await getData("people/5/?format=wookiee").then( data => console.log(data)).catch( err => console.log(err))
await getData("planets/6").then( data => console.log(data)).catch( err => console.log(err))
}catch(e){
console.log(e);
}
}

main();

