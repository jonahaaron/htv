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
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
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
  invalidHandler: function(event, validator) {
    var errors = validator.numberOfInvalids();
    if (errors) {
      var message = errors == 1 ?
        'You missed 1 field. It has been highlighted' :
        'You missed ' + errors + ' fields. They have been highlighted';
      $("div.error span").html(message);
      $("div.error").show();

      ga('send', 'event', 'Form', 'submit', errors + ' errors');
    } else {
      $("div.error").hide();
    }
  },
  submitHandler: function(form) {
    event.preventDefault();
    $.post($(form).attr('action'), $(form).serialize());
    formSuccess();
    ga('send', 'event', 'Form', 'submit', 'success');
  }
});

// Match More Brands to Main Brands
var moreBrands_pad = 0;

function resizeMoreBrands() {
  var dif = $('.brands-item img:visible:last').height() - $('.brands-item:last-child .anchor').height();
  if (dif / 2 !== moreBrands_pad) {
    moreBrands_pad = dif / 2;
    $('.brands-item:last-child .anchor').css('padding', moreBrands_pad + 'px 0');
  } else return;
}

resizeMoreBrands();
window.addEventListener('resize', function() {
  resizeMoreBrands();
}, false);

// Update copyright year
$('footer .curYr').text(new Date().getFullYear());

// Brand GA Events
$('.brands-link').click(function() {
  var brandHdrTxt = $($(this).attr('href')).find('h2').text();
  ga('send', 'event', 'Brands', 'click', brandHdrTxt);
});

// Phone GA Events
$('a.phone').click(function() {
  ga('send', 'event', 'Phone', 'click', $(this).attr('data-label'));
});