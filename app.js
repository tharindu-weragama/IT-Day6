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

/*console.log(document);

let heading = document.getElementById("heading");
console.log(heading);

heading.innerText = "ICET"; 

let number = 0;

function changeHeading(){
    heading.innerText = "Tharindu"+ ++number; 
    console.log("Clicked");

}

function reduceHeading(){
    heading.innerText = "Tharindu"+ --number; 
    console.log("Clicked");

}

function changeHeading3(){
    let textInput = document.getElementById("inputText");
    console.log(textInput.value);
    let heading = document.getElementById("heading3")
    heading.innerText = textInput.value;

}*/

/*function btnumonAction() {
    console.log("clicked");
    let input1 = document.getElementById("inputText1").value;
    let input2 = document.getElementById("inputText2").value;

    let sum = parseInt(input1) + parseInt(input2);
    document.getElementById("changeHeading3").innerText = "SUM : " + sum;

    console.log(input1);
    console.log(input2);
    console.log(sum);
}

function btnumonActionub() {
    console.log("clicked");
    let input1 = document.getElementById("inputText1").value;
    let input2 = document.getElementById("inputText2").value;

    let sum = parseInt(input1) - parseInt(input2);
    document.getElementById("changeHeading3").innerText = "SUM : " + sum;

    console.log(input1);
    console.log(input2);
    console.log(sum);
}*/

let customerList = [];

function btnAddCustomerOnAction() {
    let txtName = document.getElementById("txtName").value;
    let txtAddress = document.getElementById("txtAddress").value;
    let txtAge = document.getElementById("txtAge").value;
    let txtEmail = document.getElementById("txtEmail").value;
    let txtSalary = document.getElementById("txtSalary").value;

let customer = {
    name: txtName,
    address: txtAddress,
    age: txtAge,
    email: txtEmail,
    salary: txtSalary
}

customerList.push(customer);
loadTable();
console.log(customerList);

}

function loadTable(){
    let tblCutomers = document.getElementById("tblCustomers");

    let body = "";

    for(let i = 0 ; i<customerList.length;i++){
        body+=`<tr>
            <td>${customerList[i].name}</td>
            <td>${customerList[i].address}</td>
            <td>${customerList[i].age}</td>
            <td>${customerList[i].email}</td>
            <td>${customerList[i].salary}</td>
        </tr>`;
    }

    tblCutomers.innerHTML+= body;

    console.log(tblCutomers);

}