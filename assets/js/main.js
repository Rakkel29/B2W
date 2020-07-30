$(function() {
  //cache the window object
  var $window = $(window);

   //parallax background effect
   $('section[data-type="background"]').each(function() {
     var $bgobj = $(this); //asigning the object
//$bgobj = background object

     $(window).scroll(function() {
       //scroll the background at var speed
       //the  yPos is a negative value because we are scrolling it UP!

       var yPos = -($window.scrollTop() / $bgobj.data('speed'));
//put together our final background position

var coords = '50% '+ yPos + 'px';
 //Move the background
 $bgobj.css({backgroundPosition: coords });




}); //end window scroll
   });

});
