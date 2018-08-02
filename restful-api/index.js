// var axios = require("axios");

// axios("https://swapi.co/api/people")
//     .then(function (response) {
//        return response;
//       })
//     .then(function(data) {
//         const peopleArray = data.results;
//         // peopleArray.forEach(function (person) {
//         //     console.log(`Name: ${person.name}`);
//         //     console.log(`Height: ${person.height}`);
//         //     console.log(`Hair color: ${person.hair_color}`);
//         //     console.log("-------")
//         // });
//         for (var i=0; i < peopleArray.length; i++){
//             console.log(`Name: ${person.name}`);
//         }
//     });
const axios = require("axios");

const API_URL = `https://swapi.co/api/people`;

axios
	.get(API_URL)
	.then(response => {
		console.log(response);
    })
    .then(data => {
        const peopleArray = data.results;
        for (var i=0; i < peopleArray.length; i++){
            console.log(`Name: ${peopleArray.name}`);
        }
    })
	.catch(error => {
		console.log(error);
});