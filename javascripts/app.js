
function anim(elem, millisecs){
  $(elem).animate({
    color:"#00F7FF"
    }, millisecs );
      
  $(elem).animate({
    color:"#404042"
  }, millisecs, function(){anim(elem,millisecs)});


}

$(function(){
  anim('.resume',800);
  anim('.portfolio',900);
  anim('.linkedin',1000);
  anim('.github',1100);
  anim('.email',1200);



  // $(function() {
  //       $(".resume").hover(
  //           function() {
  //               $(this).animate({ color: "#00ff00" }, 'slow');
  //           },function() {
  //               $(this).animate({ color: "#ff0000" }, 'slow');
  //       });
  //   });

})