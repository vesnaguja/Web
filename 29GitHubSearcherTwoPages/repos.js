const user = window.localStorage.getItem('userLogin');
const usernameElement = document.querySelector('#user');


usernameElement.textContent = user;


 const request = $.ajax({
    url: 'https://api.github.com/users/' + user + '/repos'
  });

  request.done(function (response) {

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

      request.done(function (response) {
        
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