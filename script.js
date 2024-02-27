/*const example = 10

console.log(example + example )
console.log(`The number is ${example }`)
console.log(100 - example )

const greet =()=> {
    console.log("hello world!")
}

greet()

const bark =()=>{
    console.log("woof")
}
 bark()
 bark()
 bark()*/

let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => { 
    const instring = typeof calculated === 'numerical-string' 
    const calculatedAsNumber = parseInt(calculated)
    calculated === calculatedAsNumber + 1 
}

console.log(logCalc)

const calcUser = () => {
  logCalc
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}
console.log(calcUser)
console.log(user)

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(user)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()