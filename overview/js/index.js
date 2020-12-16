// ---------------------------overview-------------------------------
// string print with console.log

console.log('link file for efficent uses.')
console.log(
  'you can write string ,int number any thing you want, you can also do simpale math operations'
)

// print array
console.log([43, 45, 56, 66, 78])
console.log(['Heris', 'Shrey', 'Keval', 'Gurv', 'kinjal'])

// print js objects
console.log({ job: 'web devloper', company: 'creole studios', selary: 100 })
console.log({ name: 'heris', clg: 'GIT', cgpa: 8.61 })

// maths some simple operations with arithmetic operators

console.log(4 + 6)
console.log(16 - 6)
console.log(5 * 2)
console.log(20 / 2)
console.log(11 % 2)

// maths some simple operations with assignment operator

console.log(10 < 4)
console.log(10 <= 10)

// print some table for fun
console.table({
  senior: 'Anish Sir',
  intern: 'Heris',
  department: 'Web devlopment',
})

console.table({
  Vaibhavi: 'Abhijit Ezhava',
  Jay: 'Abhijit Ezhava',
  Heris: 'Anish Badi',
  Rajvi: 'Brijesh Dhanani',
  Parth: 'Senil Shah',
  Kartikey: 'Senil Shah',
  Vrustik: 'Senil Shah',
})
// print some warnings
console.warn('Give your best for excellent results')

//clear console
// console.clear()

// some error with condition
console.assert(200 < 100, 'Age > 100 is not exist')

// print error
console.error('if your code is wrong so you gate a errors')

// --------------------------------------------------------------------------

// veriables in javascript
// var, let , const

//use var
var companyname = 'Creole Studios'
console.log(companyname)

var companyname1 = `"Creole Studio"` //use backtics
console.log(companyname1)

var companyname2 = `'Creole' 'Studio'` //use backtics
console.log(companyname2)

var studentname = 'heris'
var marks = 100
var branch = 'IT'

console.log(studentname, marks, branch)

// use let
{
  let city = 'Rajkot'
  city = 'Morbi'
  console.log(city) // so print last assign velue here Morbi
}

// const use
const array = ['Ram', 'Laxman', 'Sita']
// const array = ['Ram', 'Laxman', 'Sita', 'Hanuman'] // you can not change value of const veriable
array.push('Hanuman') // but you can push items
console.log(array)

// Rules for creating js veriables
//1. can not start with Numbers
//2. can start with latter , Number, _ or $
var $village = 'BAPUNAGAR'
console.log($village)
//3. case sensitive
var milkShop = 'AMUL parler'
console.log(milkShop)

// ---------------------------------------------------------------------------
// differnt types of loops

// FOR LOOP, WHILE , DO-WHILE

// FOR LOOP print 1 to 5
console.log('for loop')
for (let i = 1; i < 6; i++) {
  console.log(i)
}

// WHILE LOOP print 11 to 15
console.log('while loop')
let j = 11
while (j <= 15) {
  console.log(j)
  j += 1
}

// DO WHILE LOOP print 21 to 25( do while loop min 1 time run then check condition true or false)
console.log('do while loop')
let k = 20
do {
  console.log(k + 1)
  k += 1
} while (k < 25)

// BREAK STATMENT print 21,22,23 in 21 to 25
console.log('break statment')
let m = 20
do {
  console.log(m + 1)
  if (m === 22) {
    break
  }
  m += 1
} while (m < 25)

// CONTINUE Statment when you want to 1 ittration skip so you use continue
// example : i want to skip 25 out of 21 to 30
console.log('continue statment')
let n = 20
do {
  if (n === 24) {
    n += 1
    continue
  }
  console.log(n + 1)
  n += 1
} while (n < 30)

// forEach loop
console.log('_________forEach loop_________')
let arr = ['apple', 'banana', 'watermalon']
arr.forEach(function (element) {
  console.log(element)
})
//you also get index and array
arr.forEach(function (element, index, array) {
  console.log(element, index, array)
})

// for in loop mostly use for object
console.log('_________for in_________')
let obj = {
  Name: 'heris patel',
  Age: 20,
  type: 'programmer',
  os: 'windows',
}
for (let key in obj) {
  console.log(`The ${key} of object is ${obj[key]}`)
}
