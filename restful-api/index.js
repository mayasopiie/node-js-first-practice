const axios = require("axios");
const colors = require("colors");

const STARWARS_API_URL = `https://swapi.co/api/people`;

const starWarsCharacters = () => {
    axios
        .get(STARWARS_API_URL)
        .then(response => {
            const people = response.data.results;

            const template = (name, height, hair_color) => {
                console.log(colors.yellow.bold.underline.bgCyan(`Name: ${name}`));
                console.log(colors.yellow.bold.bgCyan(`Height: ${height}`));
                console.log(colors.yellow.bold.bgCyan(`Hair color: ${hair_color}`));
                console.log("-------")
            }

            people.forEach(person => {
                template(person.name, person.height, person.hair_color);
            });
        })
        .catch(error => {
            console.log(error);
        });
}

console.log(colors.red.bold("Star Wars Characters"))
starWarsCharacters();