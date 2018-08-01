fetch("https://swapi.co/api/people")
    .then(response => response.json())
    .then(data => {
        const peopleArray = data.results;
        peopleArray.forEach(function (person) {
            console.log(`Name: ${person.name}`);
            console.log(`Height: ${person.height}`);
            console.log(`Hair color: ${person.hair_color}`);
            console.log("-------")
        });
        
        // peopleArray.map((person) => {
        //     const nameDisplay = `<h3>Name: ${person.name}</h3>`;
        //     const peopleDisplay = document.getElementById("people-display");
        //     peopleDisplay.innerHTML += nameDisplay;
        // });

        const peopleDisplay = document.getElementById("people-display");
        for(let i=0; i < peopleArray.length; i++){
            peopleDisplay.innerHTML += `<p>Name: ${peopleArray[i].name}</p>`;
            peopleDisplay.innerHTML += `<p>Height: ${peopleArray[i].height}</p>`;
            peopleDisplay.innerHTML += `<p>Hair Color: ${peopleArray[i].hair_color}</p>`;
            peopleDisplay.innerHTML += `<p>----------------------------------</p>`;
        } 
    });