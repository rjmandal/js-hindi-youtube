let myHeros = ['thor','spiderman']

let heroPower= {
    thor:'hammer',
    spiderman:'sling',
    getSpiderPower:function(){
        console.log(`spider power is ${this.spiderman}`);
    }
}

Object.prototype.sanjay = function(){
    console.log(`sanjay is present in all objects`);
}

Array.prototype.heySanjay = function(){
    console.log(`sanjay say hello`);
}

heroPower.sanjay();
myHeros.sanjay();
myHeros.heySanjay();
// heroPower.heySanjay(); hero power is object so heySanjay is injected in array so it cannot access the it 


// **********************inheritance***************************************

const User ={
    name:"chai",
    email:"chai@gmail.com"
}
const Teacher = {
    makeVideos : true
}

const TeachingSupport ={
    isAvailable : false
}

const TASupport ={
    makeAssignment : "js assignment",
    fullTime : true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern syntax of inheriance

Object.setPrototypeOf(TeachingSupport,Teacher);

let anotherUser = "chiaAurCode"
String.prototype.trueLength = function(){
    // console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`);
}

anotherUser.trueLength();
"sanjay".trueLength();