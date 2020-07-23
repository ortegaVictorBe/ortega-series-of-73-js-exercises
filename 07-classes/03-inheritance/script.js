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
        constructor(name, greeting) {
            super(greeting, name);
            this.name = name;
            this.greeting = greeting;
        }
    };

    class Dog extends Animal {
        static greeting;
        constructor(name, greeting) {
            super(greeting, name);
            this.name = name;
            this.greeting = greeting;
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        let oliverCat = new Cat("Oliver", "Mishi");
        let nenaDog = new Dog("Nena", "Pshh Pshh");

        console.log(oliverCat.sayHello());


    })

})();
