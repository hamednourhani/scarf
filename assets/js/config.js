// RequireJS Config file.

requirejs.config({
//  baseUrl: "",
  paths: {
    jquery: "jquery-1.11.3.min",
    snap : "snap.svg-min",
           
  },

  shim: {
    jquery :{
      exports : "$"
    },
      
  }
}); /*requirejs.config*/

require(['jquery','snap'], function($){
    
  
  $('document').ready(function(){
    $('#pattern').on('click',function(){
      var pattern = $(this).children('img.pattern').attr("src");
      $('.model-mask').css('background-attachment',pattern);

      var s = Snap("#model-mask");
      // Lets create big circle in the middle:
      var bigCircle = s.circle(150, 150, 100);
    })
    
    
  });

}); /*require*/
