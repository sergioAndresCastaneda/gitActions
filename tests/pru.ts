const myObjet = {
    name: "sergio",
    greet: function () {
        return `Hello ${this.name}`;
    }

}

console.log(myObjet.greet);

class User {
    name: any;
    constructor(name: any) {
        this.name = name;   
    }

    greet() {
        return `Hello ${this.name}`;
    }
}

const user1 = new User("sergio");
console.log(user1.greet());

console.log(Math.PI);
console.log(Math.E);



