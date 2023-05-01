//Factory function
function createAnimal (animalName, animalType, itsFood) {
    return {
        name: animalName,
        type: animalType,
        eats: itsFood,
        displayFood: function() {
            console.log(`${animalName} is ${animalType} and eats ${itsFood}`);
        },
    };
}

const ola = createAnimal ('ola', 'normann', 'fish');
ola.displayFood();
console.log(ola);

//Object literals
const shoppingCart = {
    cart: [],
    addToCart: function (item) {
        this.cart.push(item);
    },
    getCartItems: function() {
        console.log(this.cart);
    },
};

shoppingCart.addToCart({name: 'mleko', price: 2, qtty: 3});
shoppingCart.getCartItems();

//Setter and Getter
const car = {
    _firstCar: 'chevrolet',
    _model: 2005,
    set firstCar (newCar) {
        this._firstCar = newCar;
    },
    set model(newModel) {
        this._model = newModel;
    },
    get firstCar() {
        return this._firstCar;
    },
    get model() {
        return this._model;
    },
}

console.log(car.firstCar);
car.firstCar= 'BMW';
console.log(car.firstCar);
console.log(car.model);
car.model = 2020;
console.log(car.model);
