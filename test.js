class Pizza {
	constructor(pizzaType, pizzaSize) {
		this.type = pizzaType;
		this.size = pizzaSize;
		this.crust = "original";
		this.toppings = [];
	}
	// get pizzaCrust() {
	// 	return this.crust;
	// }
	// set pizzaCrust(pizzaCrust) {
	// 	this.crust = pizzaCrust;
	// }
	getCrust() {
		return this.crust;
	}
	setCrust(pizzaCrust) {
		this.crust = pizzaCrust;
	}
	getToppings() {
		return this.toppings;
	}
	setToppings(topping) {
		this.toppings.push(topping);
	}
	bake() {
		console.log(
			`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`
		);
	}
}

const myPizza = new Pizza("Pepperoni", "small");
// myPizza.pizzaCrust = "thin";
myPizza.setCrust("thin");
myPizza.bake();
// console.log(myPizza.pizzaCrust);
myPizza.setToppings("sausage");
myPizza.setToppings("olives");
console.log(myPizza.getToppings());
