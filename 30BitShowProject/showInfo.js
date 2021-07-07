var show = window.localStorage.getItem('showId');
console.log(show);

// var show = window.localStorage.getItem('searchedShow');

var request = $.ajax({
  url: 'http://api.tvmaze.com/shows/' + show
})


request.done(function (response) {
  // console.log(show);

  $('.showTitle').append(`<h2 class="title p-3">${response.name}</h2>`)
  $('.posterImg').append(`<img src="${response.image.medium}" class="w-100">`)
  $('.showDetails').append(`<p>${response.summary}</p>`)
})

// request for seasons

var request = $.ajax({
  url: ' http://api.tvmaze.com/shows/' + show + '/seasons'
})

request.done(function (response) {
  $('.numOfSeasons').append(`(${response.length})`)
  // console.log(response.length);
  response.forEach(function (season) {
    $('.seasons').append(`<li>${season.premiereDate} - ${season.endDate}</li>`)
  })
})

//request for cast

var request = $.ajax({
  url: 'http://api.tvmaze.com/shows/' + show + '/cast'
})

request.done(function (response) {
  response.forEach(function (cast) {
    $('.cast').append(`<li>${cast.person.name}</li>`)
  })
})