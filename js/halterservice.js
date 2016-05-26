/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('.page-scroll a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Floating label headings for the contact form
$(function() {
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});

// Add Email Method to Validation
$.validator.addMethod("email", function(value, element) {
  return this.optional(element) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(value);
}, "Please enter a valid email address.");

// Define Form Success
function formSuccess() {
  $('#contact-form').slideUp();
  $('#contact-success').slideDown();
};

// Validate & Submit Form via Ajax
$('#contact-form').validate({
  rules: {
    Field1: {
      required: true,
      minlength: 2
    },
    Field3: {
      required: true,
      minlength: 6,
      email: true
    },
    Field4: {
      required: true,
      minlength: 6,
      number: true
    },
    Field6: {
      required: true,
      minlength: 6
    },
  },
  submitHandler: function(form) {
    event.preventDefault();
    $.post($(form).attr('action'), $(form).serialize());
    formSuccess();
  }
});

// Match More Brands to Main Brands
function resizeMoreBrands() {
  var dif = $('.brands-item img:visible:last').height() - $('.brands-item:last-child .anchor').height();
  $('.brands-item:last-child .anchor').css('padding', dif / 2 + 'px 0');
}

resizeMoreBrands();
window.addEventListener('resize', function() {
  resizeMoreBrands();
}, false);

