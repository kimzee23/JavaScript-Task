// let firstNumber = 5;
// let secondNumber = 72;
function calcutate(valuleOne, valuleTwo, CallBackFunction){
    return CallBackFunction(valuleOne,valuleTwo)

};
function addTwoNumber(numberOne, numberTwo){
    let result = numberOne + numberTwo;
    return result;
};
function subtractTwoNumbers(numberOne,numberTwo){
    let result = numberOne - numberTwo;
    return result;
};
function getEvenNumbers(array){
    let arrayOfEvenNumbers = []
    for(let value of array){
    if(value % 2 ===  0){
	arrayOfEvenNumbers.push(value)
    }	
}
return arrayOfEvenNumbers
}

function getAreaOfRectangle(width,height){
    let result = width * height
    return result;
}
function convertToFehrenheit(celsius,number){
    let result = celsius + number;
    return result;
}
function isEven(numbers){
	if(numbers % 2 == 0){
	return true;
}
return false
}
function isLeap(numbering){
    if(numbering % 4 == 0){
        return true
    }
    return false
}
function countVowel(vowels){
    let vowels = "aeiouAEIOU"
    for(let letter in vowels){
        if(letter in vowels){
            return letter
        }
    }
}
module.exports = {calcutate,addTwoNumber,subtractTwoNumbers, getEvenNumbers, getAreaOfRectangle, convertToFehrenheit, isEven, isLeap, countVowel}

//console.log(calcutate(firstNumber,secondNumber,addTwoNumber));
//calcutate(firstNumber, secondNumber, subtractTwoNumbers);