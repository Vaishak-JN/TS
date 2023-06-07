const add=(n1:number,n2:number)=>{

    let res=n1+n2
    
    return res
    
}

const printResult=(num:number):void=>{
    console.log("Result : "+num)
}

printResult(add(5,6))

let combineValues: (a:number,b:number)=>number;

combineValues=add

console.log(combineValues(6,4))


const addAndHandle=(n1:number,n2:number,cb:(num:number)=>void)=>{
    const res=n1+n2
    cb(res)
}

addAndHandle(20,30,(result)=>{console.log(result)})

