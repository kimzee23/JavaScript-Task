const book = { title : "The Great Gatsby", author : "F. Scott Fitzerald", yearPublished : 1925};

console.log(book)
console.log("=".repeat(50))

console.log(book.title + " by " +  book.author)

console.log("=".repeat(50))
const car = { make : "Toyota",  model : "camry", year : 2021 };

const carsfunction = (datas) => {
   for (let fun in datas){
		console.log(fun +  " : " +datas[fun])	

}


}
carsfunction(car)

console.log("=".repeat(50))
const counter = {
		count : 0,
		step  : 30

}
function getSteps(counting){
	for(let counting = 0; counting <= counter.step; counting++){
	if (counting == counter.step){
	console.log(counting)
}
	}
}

getSteps(counter);

console.log("=".repeat(50))

const person = {
		firstName : "Ade",
		lastName : "Adebola"
}

const nameFunction = (firstName, lastName) => {
 console.log(person.firstName + " " +  person.lastName)

	


}
nameFunction(person)
console.log("=".repeat(50))

const persons = {
		firstName : "Ade",
		lastName : "Adebola",
		age : 2100
}

const personFunction = (persona) => {
	for (let fun in persona){
		console.log(fun +  " : " +persona[fun])	

}



}
personFunction(persons)

console.log("=".repeat(50))

