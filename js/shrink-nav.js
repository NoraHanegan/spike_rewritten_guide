/* eslint-disable no-undef */
$(document).on("scroll", function() {
  if ($(document).scrollTop() > 100) {
    $("nav").addClass("shrink");
  } else {
    $("nav").removeClass("shrink");
  }
});
