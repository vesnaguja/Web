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


function searchedOrSelectedShow(e) {
 
  if (e.key === 'Enter' ) {
    e.preventDefault();

    const inputSearch = e.target.value;
    e.target.value = '';


    const request = $.ajax({
      url: ' http://api.tvmaze.com/search/shows?q=' + inputSearch
    })

    request.done(function (response) {
      // window.localStorage.clear();
      // window.localStorage.setItem('showId', response[0].show.id)
      // window.open('./showInfo.html', "_blank");
      $('#rowResult').html('');

      response.forEach(function (item) {
        const poster = item.show.image.medium;
        const title = item.show.name;
        //console.log(poster);

        $('#rowResult').append(`
        <div class="col-4 img-and-title" data-show="${item.show.id}">
          <div class="border mb-4">
            <img src="${poster}" class="showImg" data-show="${item.show.id}">
            <p class="showTitle p-3 fw-bold" data-show="${item.show.id}">${title}</p>
          </div>
        </div>`)

      })
    })
  } else {
    const inputSearch = e.target.value;
    const request = $.ajax({
      url: ' http://api.tvmaze.com/search/shows?q=' + inputSearch
    })

    request.done(function (response) {
      $('.suggestions').html('');
     console.log(response);
      response.forEach(function (item) {
        const title = item.show.name;

        $('.suggestions').append(`
        <p class="select-suggestion" data-show="${item.show.id}">${title}</p>
        `)      
      })      
    })   
  }
}

$(document).on('click', '.suggestions',function (e) {
  const show = e.target.dataset.show;
console.log(show);
  window.localStorage.clear();
  window.localStorage.setItem('showId', show);
  window.open('./showInfo.html', "_blank");

})

$(document).on('click', '.img-and-title', function (e) {
  const show = e.target.dataset.show;

  window.localStorage.clear();
  window.localStorage.setItem('showId', show);
  window.open('./showInfo.html', "_blank");

})





$('#search-show').on('keydown', searchedOrSelectedShow);

$('.select-suggestion').on('click', searchedOrSelectedShow);