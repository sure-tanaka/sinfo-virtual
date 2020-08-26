$(function() {

  var src, ftype, hsrc;

  var preImage = new Array();
  $(".imgover img").each(function(i){
    preImage[i] = new Image();
    preImage[i].src = $(this);

  });

 $(".imgover img").hover(
   function (){
     src = $(this).attr("src");
     ftype = src.substring(src.lastIndexOf("."), src.length);
     hsrc = src.replace(ftype, "_over" + ftype);

     $(this).fadeTo(50, 0.50);
     $(this).attr("src", hsrc);
     $(this).fadeTo(600, 1);
   },
   function (){
     $(this).attr("src", src);
   }
 );
 $(".imgover2 img").hover(
   function (){
     src = $(this).attr("src");
     ftype = src.substring(src.lastIndexOf("."), src.length);
     hsrc = src.replace(ftype, "_over" + ftype);

     $(this).fadeTo(250, 0.50);
     $(this).attr("src", hsrc);
     $(this).fadeTo(600, 1);
   },
   function (){
     $(this).attr("src", src);
   }
 );
});