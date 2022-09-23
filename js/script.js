$(function () {
  $('.question').click(function () {
    $(this).next().slideToggle();
    $(this).find('p').toggleClass('on');
  });

  $(".openbtn1").click(function () {
    $(this).toggleClass('active');
    $('.header-sp').toggleClass('active');
  });
  $('.header-sp, .header-sp li a' ).click(function() {
    $('.openbtn1').toggleClass('active');
    $('.header-sp').toggleClass('active');
  });

  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    let speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});