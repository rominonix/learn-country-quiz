import countries from "./countries"

const hardCodedQuestions = {
	1: {
		alternatives: {
			1: 'swe',
			2: 'fra',
			3: 'dnk',
			4: 'bra',
		},
		correct: 'swe',
	},
	2: {
		alternatives: {
			1: 'blz',
			2: 'fra',
			3: 'cub',
			4: 'cog',
		},
		correct: 'fra',
	}
}
// we must to create a new feature flag for this new function
// we need to create a test with mocha for to have control if one's of country are repeat in the same question

// function for to convert keys of the countries Obj to lowercase
const country = Object.keys(countries).reduce(
	(prev, current) => ({
	  ...prev,
	  [current.toLowerCase()]: countries[current],
	}),
	{}
  );
 console.log(country); 

// for to take keys of the country object and convert to array  
const arrCountries = Object.keys(country);
console.log(arrCountries);


// loop for get four random countries and save in the arrRandomCountry variable
const arrRandomCountry = []

while (arrCountries.length > 212) {
	let randomCountry = Math.floor(Math.random() * arrCountries.length)
	let pushRandomCountry = arrCountries.splice(randomCountry, 1)
	arrRandomCountry.push(pushRandomCountry[0])	  
}

console.log(arrRandomCountry);

// const randomQuestions = {

	
// 	question: {
// 		alternatives: {
// 			1: randomCountry[0],
// 			2:randomCountry[1],
// 			3:randomCountry[2],
// 			4:randomCountry[3]
// 		}
// 	}
// }

export const createGame = () => {
	const generatedQuestions = hardCodedQuestions
	return {
		currentQuestion: 1,
		questions: generatedQuestions,
		score: {player1: 0, player2: 0},
		status: 'starting',
	}
}


export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
