class Pizza {
	constructor(pizzaSize) {
		// the _ indicate to other devs the field classes are intended to be private (NOT INTENDED TO BE MODIFIED DIRECTTLY)
		this._size = pizzaSize;
		this._crust = "original";
	}
	getCrust() {
		return this._crust;
	}
	setCrust(pizzaCrust) {
		this._crust = pizzaCrust;
	}
}
