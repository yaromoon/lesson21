$(document).ready(function () {
  
    $('.block').slideToggle(60000)
setTimeout(function(){document.querySelector(`.time`).innerHTML = "1";},60000)
    $('.block').slideToggle(60000)
    setTimeout(function(){document.querySelector(`.time`).innerHTML = "0";},60000)


})