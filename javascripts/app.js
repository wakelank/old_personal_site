
function anim(elem, millisecs){
  $(elem).animate({
    color:"#00F7FF"
    }, millisecs );

  $(elem).animate({
    color:"#404042"
  }, millisecs, function(){ anim(elem,millisecs) });
};

function navigate(){

  $(event.path[2]).toggle();
  var page = $(event.target).html();
  $('.' + page + '-html').toggle('slide',300);
}



$(function(){
  anim('.resume',800);
  anim('.portfolio',900);
  anim('.linkedin',1000);
  anim('.github',1100);
  anim('.email',1200);


 $('.index-html').toggle('slide',300);


  $('.btn').click(function(event){
    navigate(event);
  });
// $( document ).click(function() {
//   $( ".index-html" ).toggle( "slide",300);
// });

  // $('.portfolio').click(function(){
  //   var elem = event.path[2];
  //   $(elem).html('');
  //   $('.portfolio-html').slideDown();
  // });
  // $('.resume').click(function(){
  //   $('.index-html').html('');
  //   $('.resume-html').slideDown();
  // });
  // $('.my_name').click(function(){
  //   $('.index-html').html('');
  //   $('.index-html').slideDown();
  // })

});
