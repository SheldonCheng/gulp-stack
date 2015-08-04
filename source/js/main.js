$(document).ready(function(){

  // Dropdown component
  $('.js-dropdown').on('click', '.dropdown-link', function(e){
    e.preventDefault();
    $(e.delegateTarget).toggleClass('open');
  });
  $(document).on('click', function(e){
    $('.js-dropdown.open').filter(function(){
      return !$(e.target).closest('.js-dropdown').is(this);
    }).removeClass('open');
  });

  // Tooltip component
  $('.js-tooltip').hover(function(e){

    var $this = $(this),
        $tooltip = $('<div class="tooltip">'),
        pos = $this.position();
        $('body').append($tooltip);
        $tooltip.text($this.attr('title')).css({
          top: pos.top - $tooltip.outerHeight()-5,
          left: pos.left + ($this.outerWidth() - $tooltip.outerWidth())*.5
        });
        $this.removeAttr('title').data('tooltip', $tooltip);
  }, function(e){
    var $this = $(this);
    $this.attr('title', $this.data('tooltip').text()).data('tooltip').remove();
  });

  // Selectize component
  $('.js-select').selectize();

  // Tabs component
  $('.js-tabs').on('click', '.tabs-title a',function(e){
    e.preventDefault();
    $(this).parent('li').addClass('active').siblings('.active').removeClass('active');
    var target = $(this).attr('href');
    $(target).addClass('active').siblings('.active').removeClass('active');
  });

  // Accordion component
  $('.js-accordion').on('click', '.accordion-item > a', function(e){
    e.preventDefault();
    $(this).parent('li').toggleClass('active').siblings('.active').removeClass('active');
  });

  // Collapse component
  $('.js-collapse').on('click','.collapse-link', function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    $(target).closest('.collapse').toggleClass('active');
  });
});