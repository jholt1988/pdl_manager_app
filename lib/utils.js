

export function makeEnum (arr){
    let obj = Object.create(null)
    for(let value of arr){
        obj[value] = Symbol(value)
    }
    return Object.freeze(obj)
}


