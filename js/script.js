$(function(){
  $('.question').click(function(){
    $(this).next().slideToggle();
    $(this).find('p').toggleClass('on');
  });
});