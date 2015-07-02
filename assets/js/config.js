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
    snap: {
      exports: "Snap"
    },
  
  }
}); /*requirejs.config*/

require(['jquery','snap'], function($,Snap){
    
  
  $('document').ready(function(){
    
    
  });

}); /*require*/
