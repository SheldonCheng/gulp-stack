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

  // Accordion component
  $('.js-accordion').on('click', '.accordion-item > a', function(e){
    e.preventDefault();
    $(this).parent('li').addClass('active').siblings('.active').removeClass('active');
  });

  // Collapse component
  $('.js-collapse').on('click','.collapse-link', function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    $(target).closest('.collapse').toggleClass('active');
  });
});