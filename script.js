

let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


function logCalc (){  
    const calculatedAsNumber = parseInt(calculated)
    calculated === calculatedAsNumber + 1 
}


function calcUser () {
  logCalc
  if (parseInt(calculated) > 2) user === 'John'
  if (parseInt(calculated) > 2) state === 'requesting'
  if (parseInt(calculated) > 3) state === 'idle'
}

function checkUser () {
	 (user && state === 'requesting') 
		console.log(user)
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