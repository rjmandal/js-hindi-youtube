const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async task is completed');
        resolve();
    }, 1000)
})
promiseOne.then(function () {
    console.log("promise is consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("async task 2 is completed");
        resolve();
    }, 1000)
}).then(function () {
    console.log("async 2 is resolved");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "sanjay", email: "rjsanjaymandal@gmail.com" })
    }, 1000);
})
// .then((user)=>{
//     console.log(user);
// })

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "sanjay", password: "123" });
        }
        reject('ERROR : something went wrong');
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("the promsie is either resolved or rejected"));

/**
 * Creates a promise that resolves with a user object after a delay of 1 second.
 * This promise simulates a successful asynchronous operation, such as fetching user credentials.
 * The promise will resolve with an object containing a username and password.
 * Although the promise is designed to always resolve in this example, it includes a structure for rejection to demonstrate handling potential errors.
 *
 * @type {Promise<{username: string, password: string}>}
 */
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject("error: js something went wrong");
        }
    }, 1000);
});

/**
 * Asynchronously consumes `promiseFive`, logging its resolved value or error.
 * This function assumes `promiseFive` is a promise that, when resolved, 
 * yields a response that can be logged. If `promiseFive` is rejected,
 * the error is caught and logged.
 *
 * @async
 * @function consumePromiseFive
 * @returns {Promise<void>} A Promise that resolves when the operation is complete. 
 * Does not explicitly return a value, but ensures the handling of `promiseFive`.
 */
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();


/**
 * Asynchronously retrieves all users from the JSONPlaceholder API and logs the data.
 * This function does not take any parameters and does not return any value.
 * Instead, it logs the fetched data to the console or logs an error if the fetch operation fails.
 */

// async function getallUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getallUsers()


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => { return response.json() })
    .then((data) => { console.log(data); })
    .catch((error) => { console.log(error); })