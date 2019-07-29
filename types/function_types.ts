function stringFunction(){
    console.log("Hello I'm a string function")
}

function cal(val1:number, val2:number): number {
    
    let total: number    = val1 + val2;
    return total;
}
cal(2, 3)

let universal: (val1: number, val2: number)=> number;

universal = cal
console.log(universal(2,2))

