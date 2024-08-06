//BASICS
console.log('hello world')
alert("Welcome to my webpage")
let name=prompt('Enter your name')
confirm("do you want to exit ?")
if(name)
    console.log(name)
else
   console.log('you didn\'t entered your name')

// MATH
let a=3,b=5,c=33.03,deci=1.23456789
min=Math.min(a,b)
max=Math.max(a,b)
console.log(`Min of 3 & 5 : ${min}`)
console.log(`Max of 3 & 5 : ${max}`)
console.log(`Rounded value : ${Math.round(c)}`)
console.log(parseInt(c).toString())
console.log(deci.toFixed(3))
let s1="123.45"
console.log(parseFloat(s1))

// STRINGS
const s="javascript"
console.log(s.length)
for(let i=0;i<s.length;i++)
    console.log(s.charAt(i))
console.log(s.toLowerCase())
console.log(s.toUpperCase())
console.log(s.indexOf('a'))
console.log(s.lastIndexOf('a'))
console.log(s.slice(4,10))
const str="hi hello welcome"
console.log(str.split(' '))
let s2='     script     '
console.log(`before trim length : ${s2.length}`)
s2=s2.trim()
console.log(`after trim length : ${s2.length}`)
console.log(s2.includes('scr'))
console.log(s2.includes('java'))

// ARRAYS
const arr=[]
arr[0]='santhosh'
arr[1]=21
arr[2]=true
console.log(arr)
console.log(arr.length)
for(let it in arr)
    console.log(arr[it])
console.log(arr)
console.log(arr.push(233))
console.log(arr)
arr.pop()
console.log(arr)
console.log(arr.unshift(233))
console.log(arr)
arr.shift()
console.log(arr)
arr.splice(2,1)
console.log(arr)
arr.splice(2,0,true)
console.log(arr)
console.log(arr.slice(1,2))

// FUNCTIONS
function add(x,y)
{
    return x+y
}
console.log(add(3,4))

const fibo = function (n)
{
    if(n==0) return 0
    if(n==1) return 1
    return fibo(n-1)+fibo(n-2)
}
console.log(fibo(5))

const toProperCase = function (str)
{
    return str.charAt(0).toUpperCase()+str.slice(1)
}
console.log(toProperCase('bye'))

const power = (b,p) => {
    return Math.pow(b,p)
}
console.log(power(2,5))

//OBJECTS
const myObj = {
    name:'Santhosh',
    age:21,
    clg:'REC',
    dept:'CSE',
    cs: {
        sub1:'Data Structures',
        sub2:'Algorithms'
    },
    func: function(){
        return "Hello World"
    },
    arr: [10,20,30]
}
console.log(myObj)
for(let it in myObj)
    console.log(myObj[it])
console.log(myObj.cs.sub1)
console.log(myObj['cs']["sub2"])
console.log(myObj.arr[2])
console.log(myObj.func())
console.log(Object.keys(myObj))
console.log(Object.values(myObj))

const vehicle = {
    doors:4,
    engine: function(){
        return "V6"
    }
}
const car = Object.create(vehicle)
console.log(car.doors)
console.log(car.engine())
car.doors=5
car.engine=function(){ return "V8" }
console.log(car.doors)
console.log(car.engine())
console.log(car)

//DESTRUCTURING OBJECTS
const {doors:d,engine:e}=car
console.log(d)
console.log(e())
const {doors,engine}=car
console.log(doors)
console.log(engine())

// JSON Javascript Object Notation
const newObj = {
    brand: 'samsung',
    model: 'S24 Ultra',
    RAM: 32,
    ROM: 512,
    fn: function() { return `hello ${this.brand}` }
}
console.log(newObj)
console.log(typeof newObj)
const sendJSON = JSON.stringify(newObj)
console.log(sendJSON)
console.log(typeof sendJSON)
const receiveJSON = JSON.parse(sendJSON)
console.log(receiveJSON)
console.log(typeof receiveJSON)

// ERROR HANDLING
const makeError = () => {
    try{
        const bike ='TVS'
        bike='BMW'
        throw new Error('This is custom error')
    }
    catch(err){
        console.warn(err)
        console.error(err)
        console.table(err)
        console.error(err.name)
        console.error(err.stack)
        console.error(err.message)
    }
    finally{
        console.log('Finally',bike)
    }
}
makeError()

const newError = () => {
    let i=0
    while(i<=5) {
        try{
            if(i%2==1)
                throw new Error('Odd Number')
            else
                console.log('Even Number')
        }
        catch(err){
            console.error(err.message)
        }
        finally{
            console.log('Finally...')
        }
        i++
    }
}
newError()

// WEB STORAGE API
console.clear()
const obj = {
    name: 'Santhosh',
    age: 21,
    fn: () => { return this.name }
}
sessionStorage.setItem("mySessionStorage",JSON.stringify(obj))
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStorage"))
console.log(mySessionData)
console.log(sessionStorage.length)
console.log(sessionStorage.key(1))
sessionStorage.removeItem("mySessionStorage")

const obj2 = {
    bikes: ['Kawasaki','Yamaha','Honda'],
    cars: ['BMW','Skoda','TATA']
}
localStorage.setItem("localData",JSON.stringify(obj2))
const data = JSON.parse(localStorage.getItem("localData"))
console.log(data)
console.log(localStorage.length)
console.log(localStorage.key(0))

// MODULES
import first from "/module.js"
import {second as sd, third} from "/module.js"

console.log(first())
console.log(sd())
console.log(third())