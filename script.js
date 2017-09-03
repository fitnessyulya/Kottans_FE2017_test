// var searchButton = document.querySelector('#search_button');
// var searchField = document.querySelector('#search_field');
//
// searchButton.addEventListener('click', function ()
// 	{ console.log(searchField.value)
// 	}
// );

var searchButton = document.querySelector('#search_button');
var searchField = document.querySelector('#search_field');

searchButton.addEventListener('click', getGithubData);

function getGithubData() {
    console.log(searchField.value);
}