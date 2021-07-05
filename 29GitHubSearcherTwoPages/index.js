var request = $('#search-user').on('keyup', function (e) {

  if (e.key === 'Enter') {

    var inputSearch = e.target.value;
    //console.log(userName);
    e.target.value = '';

    var request = $.ajax({
      url: 'https://api.github.com/search/users?q=' + inputSearch + '&per_page=20'
    })

    request.done(function (response) {
      // ako korisnik nema ime (ime mu je null) stavi da default bude 'user pa broj usera'

      // da pocistim listu
      $('#profile').html('');
      //console.log(response.items);

      response.items.forEach(function (item) {

        var avatar = item.avatar_url || './images/placeholder-user.png'; // putanja do placeholder slike

        $('#profile').append(`
           <div class="container" data-user="${item.login}">
            <img src="${avatar}" class="profile-img" data-user="${item.login}">
            <p class="ime" data-user="${item.login}">${item.login}</p>
           </div>`)
      })
    })

  }

})

$(document).on('click', '.container', function (e) {

  // get username from clicked container
  const user = e.target.dataset.user;

  // clear previous values in localStorage
  window.localStorage.clear();

  // set localStorage item userLogin da sadrzi login ime korisnika na ciji smo container kliknuli
  window.localStorage.setItem('userLogin', user);
  
  // otvori novu stranu u novom tabu
  window.open('./repos.html', "_blank");

});