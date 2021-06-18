$('nav ul li:first-child').css({
  'border-bottom': '2px red solid'
});


$('nav li').css({
  'text-transform': 'uppercase'
});


$('.active').css({
  'color': 'green'
});


var middle = Math.ceil($('nav li').length/2);
$('nav ul li:nth-child(' + middle + ')').css({
  'background-color':'blue'
})

