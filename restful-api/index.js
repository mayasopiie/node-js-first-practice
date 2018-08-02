const axios = require("axios");
const colors = require("colors");

const STARWARS_API_URL = `https://swapi.co/api/people`;
const MY_GITHUB_FOLLOWERS_API = `https://api.github.com/users/mayasopiie/followers`;

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

            const callPeople = () =>{
                people.forEach(person => {
                    template(person.name, person.height, person.hair_color);
                });
            }

            const displayPeople = () => {
                console.log(colors.red.bold("Star Wars Characters"));
                callPeople();
            }

            displayPeople();
            
        })
        .catch(error => {
            console.log(error);
        });
}

const myGithubFollowers = () => {
    axios
        .get(MY_GITHUB_FOLLOWERS_API)
        .then(response => {
            const followers = response.data;

            const template = (name, url) => {
                console.log(colors.bgMagenta.white.bold.underline(`Name: ${name}`));
                console.log(colors.bgMagenta.white.bold(`Account URL: ${url}`));
                console.log(colors.blue("-------"));
            }

            const callFollowers = () => {
                followers.forEach(follower => {
                    template(follower.login, follower.html_url);
                })
            }

            const displayFollowers = () => {
                console.log(colors.red.bold("My Github Followers"));
                callFollowers();
            }

            displayFollowers();
        })
        .catch(error => {
            console.log(error);
        })
}


starWarsCharacters();
myGithubFollowers();