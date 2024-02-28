class User{
    constructor(username){
        this.username= username;
    }
    logMe(){
        console.log(`user name is ${this.username}`);
    }
    static createId(){
        return parseInt(Math.random()*100000);
    }
}

const sanjay = new User("sanjay");
console.log(sanjay.createId());

class Teacher extends User{
    constructor(username,email){
        super(username);
        email.this = email;
    }
}

const iphone = new Teacher("iphone","i@phone.com");
console.log(iphone.createId);