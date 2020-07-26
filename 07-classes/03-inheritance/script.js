/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by ortegaVictorBe@BeCode
 * started at 15/07/2020
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Cat extends Animal {
        static greeting;
        constructor(name) {
            super();
            this.name = name;
        }
    };

    class Dog extends Animal {
        static greeting;
        constructor(name) {
            super();
            this.name = name;
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        let oliverCat = new Cat("Oliver");
        Cat.greeting = "Mishi Mishi";
        console.log(oliverCat.sayHello());

        let nenaDog = new Dog("Nena");
        Dog.greeting = "Whoof !! Whoof!!";
        console.log(nenaDog.sayHello());
    })

})();
