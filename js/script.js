$(function(){
  $('#dropdown').hide();
});

$(function(){
    $('.list').show(function(){
      $(this).toggle('#dropdown');
    });
});
