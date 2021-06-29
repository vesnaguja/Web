$('#search-user').on('keyup', function (e) {
  if (e.key === 'Enter') {
    var userName = e.target.value;
    //console.log(userName);

    $.ajax({
      url: 'https://api.github.com/search/users?q=' + userName + '&per_page=20'
    }).done(function (response) {
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


// $('#profile').on('click', function () {
  
//   $.ajax({
//     url: 'https://api.github.com/search/users?q=' + item + '&per_page=20'
//   }).done(function (response) {
//     $('#profile').append(`
//     <a href="${item.url}" target="_blank"></a>
//   `)


//   })
// })