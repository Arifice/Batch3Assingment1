{
    var Car = /** @class */ (function () {
        function Car(brand, model, year) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
        Car.prototype.displayInfo = function () {
            console.log("Your car model is: ".concat(this.year, " ").concat(this.brand, " ").concat(this.model));
        };
        return Car;
    }());
    // Sample Input
    var myCar = new Car("Toyota", "Corolla", 2020);
    myCar.displayInfo();
    // Output: "Your car model is: 2020 Toyota Corolla"
}
