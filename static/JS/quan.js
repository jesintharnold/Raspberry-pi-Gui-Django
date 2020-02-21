$("input[name=chk]").change(function () {
  var max = 1;
  if ($("input[name=chk]:checked").length == max) {
    $("input[name=chk]").attr('disabled', 'disabled');
    $("input[name=chk]:checked").removeAttr('disabled');
  } else {
    $("input[name=chk]").removeAttr('disabled');
  }
})

