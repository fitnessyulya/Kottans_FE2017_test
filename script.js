var searchButton = document.querySelector('#search_button');
var searchField = document.querySelector('#search_field');

function getGithubData() {
    fetch('https://api.github.com/users/octocat/repos')
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
        console.log(data);
        console.log(data[0].name);
    })
}

searchButton.addEventListener('click', getGithubData);

var person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
};

var arr1 = [1, 2, 3];
var numberTwo = arr1[1];
console.log(numberTwo); //3

// inputArray.map(function(item) {
//     return { someKey: item.someKey, ... };
// });