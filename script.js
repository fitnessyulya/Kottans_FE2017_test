// var searchButton = document.querySelector('#search_button');
// var searchField = document.querySelector('#search_field');
//
// searchButton.addEventListener('click', function ()
// 	{ console.log(searchField.value)
// 	}
// );

var searchButton = document.querySelector('#search_button');
var searchField = document.querySelector('#search_field');

function getGithubData() {
    fetch('https://api.github.com/users/octocat/repos')
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
        console.log(data);
    })
}

searchButton.addEventListener('click', getGithubData);
