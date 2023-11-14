// code for get request

let word = prompt('What word would you like to look up?'); //takes user input

fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word) // appends the user input into the URL for the get request.
	.then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error('NETWORK RESPONSE ERROR');
		}
	})
	.then((data) => {
		console.log(data);
		displayDefinition(data);
	});

function getDictionaryWord() {
	fetch('https://api.dictionaryapi.dev/api/v2/entries/en' + word)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
		})
		.catch((error) => console.log(`Error: ${error}`));
}

function displayDefinition(data) {
	const displayDefinition = data;
	const definitionDiv = document.getElementById('displayDef');
}
