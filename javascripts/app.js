
function anim(elem, millisecs){
  $(elem).animate({
    color:"#00F7FF"
    }, millisecs );
      
  $(elem).animate({
    color:"#404042"
  }, millisecs, function(){ anim(elem,millisecs) });
};

function navigate(){
  var page = $(event.target).html();
  $(event.path[2]).html('');
  $('.' + page + '-html').slideDown();
}

$(function(){
  anim('.resume',800);
  anim('.portfolio',900);
  anim('.linkedin',1000);
  anim('.github',1100);
  anim('.email',1200);

  $('.index-html').slideDown();

  $('.btn').click(function(event){
    navigate(event);
  });

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