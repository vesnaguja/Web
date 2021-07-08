//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




const request = $.ajax({
  url: 'http://api.tvmaze.com/shows'
})

request.done(function (response) {
  //console.log(response);
  const top50 = response.sort(function (a, b) {
    return b.rating.average - a.rating.average;
  }).slice(0, 50);
  //console.log(top50);

  $('#rowResult').html('');

  top50.forEach(function (item) {
    const poster = item.image.medium;
    const title = item.name;
    //console.log(poster);

    $('#rowResult').append(`
    <div class="col-4 img-and-title" data-show="${item.id}">
      <div class="border mb-4">
        <img src="${poster}" class="showImg" data-show="${item.id}">
        <p class="showTitle p-3 fw-bold" data-show="${item.id}">${title}</p>
      </div>
    </div>`)
  })
})


$(document).on('click', '.img-and-title', function (e) {
  const show = e.target.dataset.show;
  //console.log(show);
  window.localStorage.clear();
  window.localStorage.setItem('showId', show);
  window.open('./showInfo.html', "_blank");
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