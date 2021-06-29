var gallery1 = $('<div>').addClass('gallery-1');
$('body').append(gallery1);

var images1 = [1, 2, 3].map(function (num) {
  return $('<img>').attr('src', '../3insertingElements/images/image' + num + '.jpg').width('33%');
});

$(gallery1).append(images1)

var selectedImg = $(gallery1).children('img:nth-child(3)').addClass('selected');


var gallery2 = $('<div>').addClass('gallery-2');
$('body').append(gallery2);

var images2 = [4, 5, 6].map(function (num) {
  return $('<img>').attr('src', '../3insertingElements/images/image' + num + '.jpg').width('33%');
});

$(gallery2).append(images2);

$(function () {
  selectedImg.removeClass('selected');
  gallery1 = selectedImg.parent();
  gallery2 = gallery1.next();
  var middle = Math.ceil($(images2).length / 2);
  var middleImg = $(gallery2).children('img:nth-child(' + middle + ')').addClass('selected');
});