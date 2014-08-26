// JavaScript Document for Menu
 jQuery(window).load(function() {
  
      $("#nav > li > a").click(function () { // binding onclick
          if ($(this).parent().hasClass('selected')) {
              $("#nav .selected div div").slideUp(100); // hiding popups
              $("#nav .selected").removeClass("selected");
          } else {
              $("#nav .selected div div").slideUp(100); // hiding popups
              $("#nav .selected").removeClass("selected");
  
              if ($(this).next(".subMenu").length) {
                  $(this).parent().addClass("selected"); // display popup
                  $(this).next(".subMenu").children().slideDown(200);
              }
          }
      }); 
  
  });


//Javascript for Expand /Collapse Panel 

$(document).ready(function(){
  $("#toggle a").click(function(){
    $("#toggle a").toggle();
  });
});

$(document).ready(function(){
  $("a.data-close").click(function(){
    $("#toggle a").toggle();
  });
});

$(document).ready(function(){
  $("#open").click(function(){
	  $("li.loginportlet-top").fadeOut('slow');
    $("div#panel").slideDown('slow');
  });
});
$(document).ready(function(){
  $("#close").click(function(){
	   $("li.loginportlet-top").show();	  
    $("div#panel").slideUp('slow');
  });
});
	
