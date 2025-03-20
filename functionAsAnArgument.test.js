// let firstNumber = 5;
// let secondNumber = 72;

const {calcutate,addTwoNumber,subtractTwoNumbers, getEvenNumbers, getAreaOfRectangle, convertToFehrenheit,isEven, isLeap, countVowel} = require("./functionAsAnArgument.js")

// test("add two numbers",() => {
//     expect(sum(firstNumber, secondNumber)).tobe(77); //write the test in one line
// }
// );

test("add two number", () =>{
    let firstNumber =5;
    let secondNumber = 72
    const result = addTwoNumber(firstNumber,secondNumber);
    let answer = 77
    expect(result).toBe(answer)
    
})
test("return even numbers ", () =>{
    let arrayOfNumbers = [2,3,4,5,6,7,9];
    let answer  = [2,4,6];
    let result = getEvenNumbers(arrayOfNumbers)
    expect(result).toEqual(answer);
})
test("return Area of a rectangle", () =>{
    let width = 10;
    let height = 40;
    let answer = 400;
    const result = getAreaOfRectangle(width,height);
    expect(result).toEqual(answer)
})
test("return Celsius to Fahrenheit", () => {
let celsius = (12.3 * 9/5 )
    let number = 32
    let answer =54.14;
    const result = convertToFehrenheit(celsius,number)
    expect(result).toEqual(answer)
})
test("if the number is even return True else false ", () => {
	let number = 12
	let result = isEven(number);
	expect(result).toBeTruthy();
	

})
test ("if the year id divisible by 4", () => {
    let numberOne = 400 % 4;
    let result = isLeap(numberOne)
    expect(result).toBeTruthy();

})
test("amount of vowels ", () =>{
    const vowels = "bread"
    let answer = "ea"
    const result = countVowel(vowels);
    expect(result).toEqual(answer)

})
