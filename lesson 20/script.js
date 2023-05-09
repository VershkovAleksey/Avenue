/* let user = {};
user.name = "Aleksey";
user.age = 25;
user.surName = "Vershkov";
user.displayInfo = function(){
    console.log(this.name);
    console.log(this.age);
};


user.displayInfo();
console.log(user);
console.log(user.age);
console.log(user.name);

let user2 = {
    name: "Aleksey",
    age:25,
    surName: "Vershkov"
}

const tom = { name: "Tom", age: 37};
const bob = Object.assign({}, tom);
bob.name = "Bob";
bob.age = 41;
         
console.log(`Объект tom. Name: ${tom.name}   Age: ${tom.age}`);
console.log(`Объект bob. Name: ${bob.name}   Age: ${bob.age}`); */
const tom = {
    name: "Tom",
    age: 26,
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
};
for(const prop in tom) {
    console.log(prop, " : ", tom[prop]);
}