var container = $('<div>');
$('body').append(container);

var images = [1, 2, 3, 4, 5, 6].map(function (number) {
  return $('<img>').attr('src', 'images/image' + number + '.jpg').width(parseInt(Math.random() * 200 + 100));
})

container.append(images);


var galleryTitle = $('<h1>');
galleryTitle.text('Surreal Images Gallery');

container.prepend(galleryTitle);



$('img').each(function () {
  if ($(this).width() < 200) {
    $(this).css({
      'border': 'green solid 5px'
    })
  } else {
    return false;
  }
})