// object destructuring

/* const person = {
	name: 'Ranjan',
	age: 43,
	location: {
		city: 'Thalo ',
		temp: 15
	}
};

const { name, age } = person;
const { city, temp } = person.location;
console.log(`${name} is ${age}`);

if(city && temp){
	console.log(`its  ${temp} degree in ${city}`);
} */

/* 
const book = {
	title: 'Ego is the Enemy',
	author: 'Ryan Holiday',
	publisher: {
		//name: 'Penguin'
	}
}
const { name: pubisherName = 'Self-published' } = book.publisher;
console.log(pubisherName); */

// Array destructuring
const address = ['Fogedmarken 6 - 1tv', 'København' , 'Sjælland' , 2200 ];

const [, city , state ,] = address; // destructuring
console.log(`Your are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00' ,'$2.50','$2.75'];

const [itemName, ,mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);