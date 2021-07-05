var request = $('#search-user').on('keyup', function (e) {
  
  if (e.key === 'Enter') {
    clearReposTable();

    var inputSearch = e.target.value;
    //console.log(userName);
    e.target.value = '';

    var request = $.ajax({
      url:  'https://api.github.com/search/users?q=' + inputSearch + '&per_page=20'
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



function clearReposTable() {
  $('.repositories-of-selected-user').html('');
}

$(document).on('click', '.container', function (e) {

  clearReposTable();

  var user = e.target.dataset.user;

  var request = $.ajax({
    url: 'https://api.github.com/users/' + user + '/repos'
  });

  request.done(function (response) {
    //console.log(response);
    $('.repositories-of-selected-user').append(`
    <div class="repository-table table-header table-cell">
    
    <div>Repository name</div>
    <div>Repository image</div>
    <div>Description</div>
    <div>Number of stars</div>
    <div>Languages on repository</div>
   
    </div>`)

    response.forEach(function (repository) {
      var request = $.ajax({
        url: repository.languages_url
      });

      var languages = [];

      request.done(function(response) {
        Object.keys(response).forEach(function (language) {
          languages.push(language);
        })

        // languages.push(...Object.keys(response));

        var name = repository.name;
        var description = repository.description || 'No description';
        var stars = repository.stargazers_count;

        $('.repositories-of-selected-user').append(`
  
        <div class="repository-table table-cell">
           
            <div>${name}</div>
            <div><img src="./images/repository-template.png"></div>
            <div>${description}</div>
            <div>${stars}</div>
            <div>${languages.join('<br>')}</div>
         
         </div>`)

      });

    })

  })

});