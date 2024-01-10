

jQuery(function($) {
  // custom formatting example
  $(".count-number").data("countToOptions", {
    formatter: function(value, options) {
      return value
        .toFixed(options.decimals)
        .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    }
  });

  // start all the timers
  $(".timer").each(count);

  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data("countToOptions") || {});
    $this.countTo(options);
  }
});













$(function() {
  // Owl Carousel
  var owl = $(".Testimonial ");
  owl.owlCarousel({
    //  items: 3,
    margin: 10,
    loop: true,
    autoplay:true,
    smartSpeed:500,
    autoplayTimeout:2000,
    responsive: {
      
     
      0:{
        items:1
      }, 767:{
        items: 2,
      },
      991:{
        items: 3,
      },
      
    }
  });
});




/* wow js */

new WOW().init();

/* counter up js */

$('.counter').counterUp({
  delay: 10,
    time: 10000
});






// 

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})



