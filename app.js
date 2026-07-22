/*class customer {
    name;
    age;
    address;


    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;

    }

}

let customer1 = new customer("THARINDU", 20, "COLOMBO");
console.log(customer1);

let customer2 = {
    name: "John",
    age: 23,
    address: 'new york',
    salary: 40000,
    item: [
        {
            id : 1,
            name : "item1",
            price : 100
        }, 
        {
            id : 2,
            name : "item2",
            price : 200
        },
        {
            id : 3,
            name : "item3",
            price : 300,
            variants : [
                {
                    id : 1,
            name : "variety1",
            price : 10,
                },
                {
                    id : 2,
            name : "variety",
            price : 20,
                }
            ]
        } ],
    father: {
        name: "dpoe",
        age: 50,
        address: "new yrk"
    }
};

console.log(customer2.name);
console.log(customer2.age);
console.log(customer2.address);
console.log(customer2.salary);
console.log(customer2.item[2]);
console.log(customer2.father.name);
console.log(customer2.item[2].variants[1].price);
*/

// DOM (Document object Model) Manipulation ----------------------------

console.log(document);

let heading = document.getElementById("heading");
console.log(heading);

heading.innerText = "ICET"; 

function changeHeading(){
    heading.innerText = "Tharindu"; 
    console.log("Clicked");

}

