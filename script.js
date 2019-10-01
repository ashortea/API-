const baseURL ='https://api.edamam.com/search';
const key ='3d36ecc30fbddd5b79a92b466ac91dab	—';
const id = '4a6418d9';
let url ;
 
const searchTerm = document.querySelector('search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');


searchForm.addEventListener('submit', fetchResults);

function fetchResults(event){
    event.preventDefault();
    url = `${baseURL}&q=${searchTerm.value}`;
    console.log('URL:', url);

    fetch()
    .then(function (result) {
        console.log(result)
        return result.json();
      })
}

// function displayResults(json){

// }