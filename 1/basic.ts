// console.log('Time to get started...');
const add=(n1:number,n2:number,show:boolean,phrase:string)=>{

    let res=n1+n2
    if(show){
        console.log(phrase + res)
    }else{
        return res
    }
}

const num1=5
const num2=5

const result=add(num1,num2,false,"The result is ")

console.log(result)
