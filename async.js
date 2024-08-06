// ASYNCHRONOUS BASICS
console.log("first")
setTimeout( () => { console.log("second") },3000)
console.log("third")

// PROMISES
// 3 states: Pending, Fulfilled, Rejected
const myPromise = new Promise((resolve,reject) => {
    const err = true
    if(!err)
        resolve("Yes! resolved the promise")
    else
        reject("No! rejected the promise")
})
console.log(myPromise)
myPromise.then(value => { 
    return value 
})
.then(newValue => {
    console.log(newValue)
})
.catch(err => {
    console.log(err)
})

const users = fetch("https://jsonplaceholder.typicode.com/users")
.then(response => { 
    return response.json() 
})
.then(value => {
    console.log(value)
})
console.log(users)

// ASYNC & AWAIT
const myUsers = {
    List: []
}
const firstFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data)
    return data
}
const secondFunction = async () => {
    const newData = await firstFunction()
    myUsers.List = newData
    console.log(myUsers)
    console.log(newData)
}
secondFunction()
console.log(myUsers)

const getDadJokes = async () => {
    const response = await fetch("https://icanhazdadjoke.com/",
        {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        })
    const jokes = await response.json()
    console.log(jokes)
}
getDadJokes()