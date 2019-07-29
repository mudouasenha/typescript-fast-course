"use strict";
const automobile = {
    brand: "HotWheels",
    speed: 200,
    speedMethod() {
        console.log(`this ${this.brand} is going at ${this.speed} miles an hour`);
    }
};
const automobile2 = {
    speed: 20,
    speedMethod() {
        console.log(`this ${this.brand} is going at ${this.speed} miles an hour`);
    }
};
function car1(automobile) {
    automobile.speed = 5000;
    console.log(`this ${automobile.brand} is going at ${automobile.speed} miles an hour`);
}
// car1(automobile)
class AutoMobileClass {
    speedMethod(speed) {
        console.log(`Hi my car's going at ${speed} miles`);
    }
}
let carObject = new AutoMobileClass();
carObject.speedMethod(1000);
