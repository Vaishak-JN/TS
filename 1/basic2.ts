enum Role{ADMIN=5,READ_ONLY,AUTHOR="AUTHOR"}

const person={
    name:"tutu",
    age:"25",
    hobbies:["sports","cooking"],
    role:Role.ADMIN
}

if(person.role===Role.ADMIN){
    console.log("read-only")
}

// const person:{
//     name:string;
//     age:number;
//     hobbies:string[];
//     role:[number,string] //tuple
// }={
//     name:"tutu",
//     age:25,
//     hobbies:["sports","cooking"],
//     role:[2,"author"]
// }

// person.role.push("admin") //push is allowed in tuples
// // person.role[1]=10;
// person.role[1]="10";

// const num=5;
// let num=5
// console.log(num)

// let favoriteActivities:any[];
// favoriteActivities=["sports",1,true]

let favoriteActivities:string[];
favoriteActivities=["sports","1","true"]

// console.log(person.nickname)
console.log(person.name)



// const person:object={
//     name:"tutu",
//     age:"25"
// }
// const person:{}={
//     name:"tutu",
//     age:"25"
// }
// const person:{
//     name:string;
//     age:number;
// }={
//     name:"tutu",
//     age:25
// }