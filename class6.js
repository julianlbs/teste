// THIS IS NEW FROM ES6
class Pizza {
	crust = "original";
	#sauce = "traditional"; // the # indicates a privade field class
	#size;
	constructor(pizzaSize) {
		this.#size = pizzaSize;
	}
	getCrust() {
		return this.crust;
	}
	setCrust(pizzaCrust) {
		this.crust = pizzaCrust;
	}
	hereYouGo() {
		console.log(
			`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`
		);
	}
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.crust); // the public field class is still available
