const suggestionDiv = document.querySelector('.suggestions');
const searchBox = document.querySelector('#search-show');

const show = window.localStorage.getItem('showId');

var request = $.ajax({
  url: 'http://api.tvmaze.com/shows/' + show
})

request.done(function (response) {
  const poster = (response.image) ? response.image.original : './images/300.png';
  $('.showTitle').append(`<h2 class="title p-3">${response.name}</h2>`)
  $('.posterImg').append(`<img src="${poster}" class="img-fluid pb-3">`)
  $('.showDetails').append(`<p>${response.summary}</p>`)
})

// request for seasons
var request = $.ajax({
  url: ' http://api.tvmaze.com/shows/' + show + '/seasons'
})

request.done(function (response) {
  $('.numOfSeasons').append(`(${response.length})`)

  response.forEach(function (season) {
    $('.seasons').append(`<li>${season.premiereDate} - ${season.endDate}</li>`)
  })
})

//request for cast
var request = $.ajax({
  url: 'http://api.tvmaze.com/shows/' + show + '/cast'
})

request.done(function (response) {
  response.slice(0, 10).forEach(function (cast) {
    $('.cast').append(`<li>${cast.person.name}</li>`)
  })
})

function searchedOrSelectedShow(e) {
  if (e.key === 'Enter') {
    e.preventDefault();

    const inputSearch = e.target.value;
    e.target.value = '';

    const request = $.ajax({
      url: 'http://api.tvmaze.com/search/shows?q=' + inputSearch.trim()
    })

    request.done(function (response) {
      const poster = (response.image) ? response.image.original : './images/300.png';
      $('.showTitle').append(`<h2 class="title p-3">${response.name}</h2>`)
      $('.posterImg').append(`<img src="${poster}">`)
      $('.showDetails').append(`<p>${response.summary}</p>`)
    })

  } else if (e.key !== 'Escape') {
    const inputSearch = e.target.value;

    const request = $.ajax({
      url: ' http://api.tvmaze.com/search/shows?q=' + inputSearch.trim()
    })

    request.done(function (response) {
      $('.suggestions').html('');

      // position suggestions div
      suggestionDiv.style.top = e.target.offsetTop + e.target.offsetHeight + 'px';
      suggestionDiv.style.left = e.target.offsetLeft + 'px';

      // fill suggestions div
      response.forEach(function (item) {
        const show = item.show;
        $('.suggestions').append(`
        <p class="select-suggestion" data-show="${show.id}">${show.name}</p>
        `)

        // show suggestions div
        suggestionDiv.style.display = 'block';
      })
    })
  }
}

function toLS(e) {
  var show = e.target.dataset.show;
  window.localStorage.clear();
  window.localStorage.setItem('showId', show);
  window.open('./showInfo.html', "_self");
}

$(document).on('click', '.suggestions', e => toLS(e));
$(document).on('click', '.img-and-title', e => toLS(e));

$('#search-show').on('keyup', searchedOrSelectedShow);

$('body').on('click', () => {
  suggestionDiv.style.display = 'none';
});
$(document).on('keydown', () => {
  suggestionDiv.style.display = 'none';
});