const express = require("express");  //copy paste line
const faker = require("faker");
const app = express(); //from express library all done through app //copy paste line
const port = 8000; //how we run our backend. frontend is on 3000 //copy paste line


class User {
    constructor() {
        this._id = faker.datatype.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Address{
    constructor(){
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}
const newAdd = new Address();

const newUser = new User();
console.log(newUser);

class Company {
    constructor() {
        this._id = faker.datatype.number();
        this.name= faker.company.companyName();
        this.address = newAdd;
    }
}
const newComp = new Company();
console.log(newComp);
console.log(newUser);


app.use(express.json());  
app.use(express.urlencoded({extended:true})); 

app.get("/api/users/new", (req,res) =>{  
    res.json(`User First Name: ${newUser.firstName}; User Last Name: ${newUser.lastName}`);  
    }
);
app.get("/api/companies/new", (req,res) =>{  
        res.json(`Company name: ${newComp.name}`);
    }
);
app.get("/api/user/company", (req,res)=>{
        res.json(`User First Name: ${newUser.firstName}; Company name: ${newComp.name}`);
    }
);
app.listen(port, ()=>console.log(`running on port ${port}`)); // copy paste this and above to every project
