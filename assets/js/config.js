  
  
  $('document').ready(function(){
    $('#pattern').on('click',function(){
      var pattern = $(this).children('img.pattern').attr("src");
      $('.model-mask').css('background-attachment',pattern);

      var svg = Snap("#svg-mask");

      // Lets create big circle in the middle:
      var path = $("#mask-path").attr('d');
      
      
     pattern = svg.image("assets/img/scarf-400.png",0,0,137,200).pattern(0,0,137,200);
      var mask = svg.path(path);
       mask.attr({
         fill : pattern,
        stroke: "#bada55",
        strokeWidth: 0
    });
     

      
});

      
    
  });


