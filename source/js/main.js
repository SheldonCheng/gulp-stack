$(document).ready(function(){

  // Selectize component
  $('.js-select').selectize();

  // Tabs component
  $('.js-tabs').on('click', '.tabs-link a',function(e){
    e.preventDefault();
    $(this).parent('li').addClass('active').siblings('.active').removeClass('active');
    var target = $(this).attr('href');
    $(target).addClass('active').siblings('.active').removeClass('active');
  });

});