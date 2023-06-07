// alias
type Combinable = number | string
type ConversionDesc = "as-number" | "as-text"

const combine=(a1:Combinable, a2:Combinable, resultConversion: ConversionDesc )=>{ //literal type //union type

    let res;
    if(typeof a1==="number" && typeof a2==="number" || resultConversion==="as-number"){
        res=+a1+ +a2
    }else{
        res=a1.toString() + a2.toString()
    }

    // if(resultConversion==="as-number"){
    //     return +res
    // }else{
    //     return res.toString()
    // }

    return res
    
}

// const age1=5
// const age2=20
const age1="5"
const age2="20"

const name1="tutu"
const name2="vava"

// const result1=combine(age1,age2,"as-number")
const result1=combine(age1,age2,"as-number")
const result2=combine(name1,name2,"as-text")

console.log(result1)
console.log(result2)
