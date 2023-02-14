// Convert number to reversed array of digits


const digitize = (num) => {
   let arrStrings = num.toString().split('').reverse()
   return arrStrings.map(Number)
}


console.log(digitize(35231))