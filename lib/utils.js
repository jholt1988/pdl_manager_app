

export function makeEnum (arr){
    let obj = Object.create(null)
    for(let value of arr){
        obj[value] = value
    }
    return Object.freeze(obj)
}


export const STATUS = makeEnum(["IDLE", 'LOADING', 'SUCCESS', 'FAILED'])