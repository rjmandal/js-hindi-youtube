// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
//********************************************************* */
console.log(shoppingCart.reduce((acc,item)=>acc+item.price,0));
//********************************************************* */

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);

// ***********************************************************
const myNumbers=[1,2,3]
// const myTotal = myNumbers.reduce(function (acc,curval){
//     console.log(`acc:${acc} and curval:${curval} => ${acc+curval}`);
//     return acc+curval
// },0)//here zero is the initial value which is passed to the acc variable in the first iteration of the loop
// console.log(`total => ${myTotal}`);

// try the above code using arrow function

// const myTotal= myNumbers.reduce((acc,curval)=>{
//     console.log(`acc:${acc} and curval:${curval} => ${acc+curval}`);
//     return acc+curval
// },0);

// const myTotal=console.log(myNumbers.reduce((acc,curval)=>acc+curval,0));
// ***************************************************************