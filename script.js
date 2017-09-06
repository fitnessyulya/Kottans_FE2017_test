var searchButton = document.querySelector('#search_button');
var searchField = document.querySelector('#search_field');

function getGithubData() {
    fetch('https://api.github.com/users/octocat/repos')
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
        console.log(data);
        // console.log(data[0].full_name);

            for(var i=0;i<data.length;i++){
                console.log(data[i].name + " " + data[i].stargazers_count);
            }
        })
}

searchButton.addEventListener('click', getGithubData);

