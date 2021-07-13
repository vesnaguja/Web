const suggestionDiv = document.querySelector('.suggestions');
const searchBox = document.querySelector('#search-show');

const request = $.ajax({
  url: 'http://api.tvmaze.com/shows'
})

request.done(function (response) {

  const top50 = response.sort(function (a, b) {
    return b.rating.average - a.rating.average;
  }).slice(0, 50);

  $('#rowResult').html('');

  top50.forEach(function (item) {
    const poster = item.image.medium;
    const title = item.name;
    
    $('#rowResult').append(`
    <div class="col-4 img-and-title py-3" data-show="${item.id}">
      <img src="${poster}" class="showImg img-fluid card-img-top" data-show="${item.id}">
      <div class="border card-body">       
        <h5 class="showTitle card-title" data-show="${item.id}">${title}</h5>
      </div>
    </div>`)
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

      $('#rowResult').html('');

      response.forEach(function (item) {
        // console.log(item);

        if (item.show) {
          const poster = (item.show.image) ? item.show.image.medium : './images/300.png';
          const title = item.show.name;

          $('#rowResult').append(`
          <div class="col-4 img-and-title " data-show="${item.show.id}">
            <div class="border mb-4">
              <img src="${poster}" class="showImg img-fluid" data-show="${item.show.id}">
              <p class="showTitle p-3 fw-bold" data-show="${item.show.id}">${title}</p>
            </div>
          </div>`)
        }

      })
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
        $('.suggestions').append(`<p class="select-suggestion" data-show="${show.id}">${show.name}</p>`)
      })

      // show suggestions div
      suggestionDiv.style.display = 'block';
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


window.onload = function () {
  document.getElementById("spinner").classList.remove("d-flex");
  document.getElementById("spinner").classList.add("hidden-results");
};
