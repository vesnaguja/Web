var request = $('#search-user').on('keyup', function (e) {
  if (e.key === 'Enter') {
    var inputSearch = e.target.value;
    //console.log(userName);

    var request = $.ajax({
      url: 'https://api.github.com/search/users?q=' + inputSearch + '&per_page=20'
    })

    request.done(function (response) {
      // ako korisnik nema ime (ime mu je null) stavi da default bude 'user pa broj usera'

      // da pocistim listu
      $('#profile').html('');

      response.items.forEach(function (item) {
        $('#profile').append(`
           <div class="container">
           <img src="${item.avatar_url}" class="profile-img">
           <p class="ime">${item.login}</p>
           </div>`)
      })

    })

  }

})





$('#profile').on('click', function (event) {
  $('.new-content').append(`
  <p>Bla Bla</p>
  `)
 

 


})