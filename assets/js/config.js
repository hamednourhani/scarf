  
  
  $('document').ready(function(){
    $('#pattern').on('click',function(){
      var pattern = $(this).children('img.pattern').attr("src");
      $('.model-mask').css('background-attachment',pattern);

      var svg = Snap("#svg-mask");
      // Lets create big circle in the middle:
      var path = $("#mask-path").attr('d');
      var mask = svg.path(path).attr({
        fill: "assets/img/scarf.png",
        stroke: "#bada55",
        strokeWidth: 0
    });
      mask.image("assets/img/scarf.png",0,0,138,200);
});

      
    
  });


