const show = window.localStorage.getItem('showId');
const showNameElement = document.querySelector('#show');

showNameElement.textContent = user;

var request = $.ajax({
  url: 'http://api.tvmaze.com/search/shows?q=' + inputSearch
 
})