﻿abstact class Car {
    public description: string;

    public getDescription(): string {
        retun this.description;
    }

    public abstract cost(): number;
}

class ModelS extends Car {
    public description = "Model S";

    public cost(): number {
        return 73000;
    }
}

class ModelX extends Car {
    public description = "Model X";

    public cost(): number {
        return 77000;
    }
}

abstract class CarOptions extends Car {
    decoratedCar: Car;
    public abstract getDescription(): string;
    public abstract cost(): number;
}

class EnhancedAuto extends CarOptions{
    decoratedCar: Car:

    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', Enhanced AutoPilot';
    }

    public cost(): number{
        return this.decoratedCar.cost() + 5000;
}

}

class HeatedSeats extends CarOptions {
    decoratedCar: Car:

    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', HeatedSeats';
    }

    public cost(): number {
        return this.decoratedCar.cost() + 3000;
    }

}

let myTesla = new ModelS():
    myTesla = new HeatedSeats(myTesla);

console.log(myTesla.cost());
console.log(myTesla.getDescription());
  