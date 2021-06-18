var container = $('<div>');
$('body').append(container);

var images = [1, 2, 3, 4, 5, 6].map(function (number) {
  return $('<img>').attr('src', 'images/image' + number + '.jpg').addClass('img-' + number).css('width', '350px');
})

container.append(images);


var galleryTitle = $('<h1>');
galleryTitle.text('Surreal Images Gallery');

container.prepend(galleryTitle);

// $('img width').each(function (index, element) {
//   var val = ['350px', '150px', '400px', '100px', '300px', '200px'];
//   console.log(val[index]);

//   return (element + '' + val[index]);
// })

$('.img-1').css('width', '350px');
$('.img-2').css('width', '150px');
$('.img-3').css('width', '400px');
$('.img-4').css('width', '100px');
$('.img-5').css('width', '300px');
$('.img-6').css('width', '200px');

$('img').each(function (element) {
  if ($(element).css('width', '200px')) {
    $(this).css({
      'border': 'green solid'
    })
  }
  return false;

})