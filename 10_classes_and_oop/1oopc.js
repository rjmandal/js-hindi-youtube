 const user = {
    username:"sanjay",
    loginCount: 8,
    signIn:true,

    getUserDetails: function(){
        // console.log('got user details from database');
        // console.log(`${this.username}`);
        // console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting = function(){
        console.log(`welocome ${this.username}`);
    }
}

const userOne = new User("sanjay",12,true);
const userTwo = new User("Mandal",11,true);
console.log(userOne);
console.log(userTwo);