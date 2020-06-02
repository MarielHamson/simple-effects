$(document).ready(function() {
    $(".walrus").click(function() {
      $("#walrus-showing").fadeToggle();
      $("#walrus-hidden").fadeToggle();
    });
    $(".bear").click(function() {
      $("#bear-showing").slideToggle();
      $("#bear-hidden").slideToggle();
    });
});