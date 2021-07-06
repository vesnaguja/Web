var request = $.ajax({
  url: 'http://api.tvmaze.com/shows'
})

request.done(function (response) {
  //console.log(response);
  var top50 = response.sort(function(a, b){
    return b.rating.average - a.rating.average;
  }).slice(0, 50);
 // console.log(top50);

 top50.forEach(function (item) {
    var poster = item.image.medium;
    var title = item.name;
    console.log(poster);

    $('#rowResult').append(`
    <div class="col-4 g-3 img-and-title">
    <img src="${poster}" class="showImg">
    <p class="showTitle">${title}</p>
    </div> 
    `)

  })


})