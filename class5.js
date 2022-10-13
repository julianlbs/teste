// Factory Function
function pizzaFactory(pizzaSize) {
	const crust = "original";
	const size = pizzaSize;
	return {
		bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`),
	};
}

const myPizza = pizzaFactory("small");
myPizza.bake();

// THIS SOLVES AN OLD ISSUE: IT HAS THE SAME FUNCTIONALITY AS A CLASS AND MAKES IT'S FIELD CLASSES PRIVATE.
