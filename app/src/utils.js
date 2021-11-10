import countries from "./countries.js";

const hardCodedQuestions = {
  1: {
    alternatives: {
      1: "swe",
      2: "fra",
      3: "dnk",
      4: "bra",
    },
    correct: "swe",
  },
  2: {
    alternatives: {
      1: "blz",
      2: "fra",
      3: "cub",
      4: "cog",
    },
    correct: "fra",
  },
};
// we must to create a new feature flag for this new function
// we need to create a test with mocha for to have control if one's of country are repeat in the same question

// function for to convert keys of the countries Obj to lowercase
export const createRandomGame = () => {

	const country = Object.keys(countries).reduce(
		(prev, current) => ({
		  ...prev,
		  [current.toLowerCase()]: countries[current],
		}),
		{}
	  );
	  
	  // for to take keys of the country object and convert to array
	  const arrCountries = Object.keys(country);
	  
	  // loop for get four random countries and save in the arrRandomCountry variable
	  const arrRandomCountry = [];
	  
	  while (arrCountries.length > 0) {
		let randomCountry = Math.floor(Math.random() * arrCountries.length);
		let pushRandomCountry = arrCountries.splice(randomCountry, 1);
		arrRandomCountry.push(pushRandomCountry[0]);
	  }
	  
	  let randomCountry = [];
	  let count = 0;
	  let temp = [];
	  
	  for (let i = 191; i <= arrRandomCountry.length; i++) {
		count++;
		if (count === 5) {
		  randomCountry.push(temp);
		  temp = [];
		  count = 0;
		} else {
		  temp.push(arrRandomCountry[i]);
		}
	  }
	  
	  console.log("random", randomCountry);
	  const randomQuestionsGame = {
		1: {
		  alternatives: {
			1: randomCountry[0][0],
			2: randomCountry[0][1],
			3: randomCountry[0][2],
			4: randomCountry[0][3],
		  },
		  correct: randomCountry[0][1],
		},
	  
		2: {
		  alternatives: {
			1: randomCountry[1][0],
			2: randomCountry[1][1],
			3: randomCountry[1][2],
			4: randomCountry[1][3],
		  },
		  correct: randomCountry[1][0],
		},
		3: {
		  alternatives: {
			1: randomCountry[2][0],
			2: randomCountry[2][1],
			3: randomCountry[2][2],
			4: randomCountry[2][3],
		  },
		  correct: randomCountry[2][3],
		},
		4: {
		  alternatives: {
			1: randomCountry[3][0],
			2: randomCountry[3][1],
			3: randomCountry[3][2],
			4: randomCountry[3][3],
		  },
		  correct: randomCountry[3][0],
		},
		5: {
		  alternatives: {
			1: randomCountry[4][0],
			2: randomCountry[4][1],
			3: randomCountry[4][2],
			4: randomCountry[4][3],
		  },
		  correct: randomCountry[4][1],
		},
	  };

	return randomQuestionsGame
}


export const createGame = () => {
  const { randomQuestions } = JSON.parse(localStorage.getItem("featureFlags"));
  const randomQuestionsValue = randomQuestions.value;
  const generatedQuestions = randomQuestionsValue
    ? createRandomGame()
    : hardCodedQuestions;
  return {
    currentQuestion: 1,
    questions: generatedQuestions,
    score: { player1: 0, player2: 0 },
    status: "starting",
  };
};

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
