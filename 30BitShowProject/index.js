var request = $.ajax({
  url: 'http://api.tvmaze.com/shows'
})

request.done(function (response) {
  //console.log(response);
  var top50 = response.sort(function (a, b) {
    return b.rating.average - a.rating.average;
  }).slice(0, 50);
  //console.log(top50);

  $('#rowResult').html('');

  top50.forEach(function (item) {
    var poster = item.image.medium;
    var title = item.name;
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
  window.localStorage.clear();
  window.localStorage.setItem('showId', show);
  window.open('./showInfo.html', "_blank");
})


// $('#search-show').on('keydown', function (e) {  

//   if (e.key === 'Enter') {
//     e.preventDefault();
//     // console.log('nesto');
//     var inputSearch = e.target.value;
//     e.target.value = '';

//     //window.localStorage.clear();
//     window.localStorage.setItem('searchedShow', inputSearch)
//     window.open('./showInfo.html', "_blank");

//   }

// })