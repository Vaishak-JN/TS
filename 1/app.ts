let input:unknown;
let username:string

input=5
input="5"

if(typeof input==="string"){
    username=input
}

function generateError(message:string,code:number):never{
    throw {message,errorCode:code}
}