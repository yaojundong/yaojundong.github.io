$(function () {
   let  imgBox=$('.bannerBox>img');
   let  lbdBox=$('.banner .lbd li');
   let  i=-1;
   imgBox.not('.bannerBox>img:first-of-type').css({left:'7.5rem'});
   function move() {
      i++;
      if(i>=imgBox.length){

         i=0;
      }
      lbdBox.eq(i).removeClass('active');
      imgBox.eq(i).animate({left:'-7.5rem'},800,function () {

          imgBox.eq(i).css({left:'7.5rem'});

      });
      if(i>imgBox.length-2){
          imgBox.eq(0).animate({left:'0'},800);
          lbdBox.eq(0).addClass('active');
      }else{
          imgBox.eq(i+1).animate({left:'0'},800);
          lbdBox.eq(i+1).addClass('active');

      }


   }
   setInterval(move,2000);
});