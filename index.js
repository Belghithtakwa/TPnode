function lengthString(str){
  return new Promise((successCallback, failureCallback) => {
    if (str.length >= 20){
       successCallback(true);
    } else {return failureCallback(false) }
  })
}

function substraction(num1, num2){
  return new Promise((successCallback, failureCallback) => {
    if (num1 > num2){
      successCallback(num1 - num2);
    } else {return failureCallback() }
  })
}
function isMineur(date){
  return new Promise((successCallback, failureCallback) => {
   
      var date_components = date.split("/");
   
      var year = date_components[2];
  dateAujourd = new Date().getFullYear()
    if (dateAujourd - year >= 18){
       successCallback(true);
    } else {return failureCallback('echoue') }
  })
}

async function main(){
  try{
await lengthString("Hello").then(data => console.log("verify length string: " + data)).catch(error => console.log("error length String: " +error))
await lengthString("Bonjour tous le monde").then(data => console.log("verify length string: " + data)).catch(error => console.log("error length String:    " +error))
await substraction(24, 12).then(data => console.log("substraction: " + data)).catch(error => console.log("error substraction function: " +error))
await substraction(4, 12).then(data => console.log("substraction: " + data)).catch(error => console.log("error substraction function: " +error))
await isMineur("21/10/1997").then(data => console.log("isMineur: " + data)).catch(error => console.log("isMineur: " +error))
await isMineur("12/12/2018").then(data => console.log("isMineur: " + data)).catch(error => console.log("isMineur: " +error))
  } catch(e){
    console.log(e)
  }
}
main();