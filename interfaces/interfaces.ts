interface AutomobileInterface{

    brand?: string,
    speed?: number,
    speedMethod(speed: number): void

}

const automobile: AutomobileInterface = {
    brand: "HotWheels",
    speed: 200,
    speedMethod(){
        console.log(`this ${this.brand} is going at ${this.speed} miles an hour`)
    }
}

interface AutomobileInterface2 extends AutomobileInterface{
    brand?: string
    speed: number
}

const automobile2: AutomobileInterface2 = {

    speed: 20,
    speedMethod(){
        console.log(`this ${this.brand} is going at ${this.speed} miles an hour`)
    }
}

function car1(automobile: AutomobileInterface){

    automobile.speed = 5000;

    console.log(`this ${automobile.brand} is going at ${automobile.speed} miles an hour`)

}

// car1(automobile)


class AutoMobileClass implements AutomobileInterface{

    brand:string
    speed:number

    speedMethod(speed: number){

        console.log(`Hi my car's going at ${speed} miles` )
    }
}

let carObject = new AutoMobileClass()

carObject.speedMethod(1000)