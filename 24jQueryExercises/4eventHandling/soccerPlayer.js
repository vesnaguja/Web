var isOn = true;
$('.btn-stop-moving').click(function () {
  if (isOn) {
    $(this).text('Start Moving');
    isOn = false;
  } else {
    $(this).text('Stop Moving');
    isOn = true;
  }
})

$('.field').on('mousedown', function (event) {
  if (isOn) {
    $('.player').css({
      'top': event.clientY + 'px'
    });
    $('.player').css({
      'left': event.clientX + 'px'
    })
  }
})