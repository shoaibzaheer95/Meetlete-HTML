//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".top-bar").offset().top > 50) {
        $('.top-bar').addClass("top-nav-fixed");
    } else {
        $('.top-bar').removeClass("top-nav-fixed");
    }
});
// jQuery - add active class to Bootstrap Accordion Heading

if ($('#MTaccordion').length) {

	var $panels = $('.panel');

	// add active class to first open panel
	// only necessary if this panel is open by default on your accordion
	$panels.first().addClass('active');

	$('.panel-heading').on('click', function (e) {

		$this = $(this);

		$panel = $this.parents('.panel');

		$panels.not( $panel ).removeClass('active');

		$panel.toggleClass('active');

    });
}



// scroll animation
$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".novisible");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});


