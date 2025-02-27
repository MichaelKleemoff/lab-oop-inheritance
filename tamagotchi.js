// Create class below
class Tamagotchi {
	constructor(name, energy, full, mood, sick, rehomed) {
		this.name = name;
		this.energy = energy || 9;
		this.full = full || 8;
		this.mood = mood || 6;
		this.sick = sick || false;
		this.rehomed = rehomed || false;
	}

	greet() {
		console.log(`Hello, I'm ${this.name}!`);
	}

	status() {
		console.log(
			`******************************

        My mood is : ${this.mood}
        I am this full: ${this.full}
        My energy is: ${this.energy}
        I am not sick: ${this.sick}
       *******************************
      `
		);
	}

	eat() {
		this.full += 2;
		this.energy--;

		if (this.full > 10) {
			this.sick = true;
		}
	}

	medicate() {
		if (this.sick === true) {
			this.full = 9;
			this.energy - 3;
		}
		if (this.sick === false) {
			console.log(`refusal to take medicine`);
			this.energy - 1;
		}

		this.sick = false;
	}
}

// Do not edit below this line
module.exports = Tamagotchi;
