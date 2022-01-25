location.reload();
window.print();


$("#input-letter").on("propertychange change keyup paste input",function(){
      $(this)[0].style.height='auto';
      $(this).height( $(this).prop('scrollHeight'));
   });



 $("#input-letter").on("propertychange change keyup paste input",function(){
     var content = $(this).val(); /*입력값 받아오기*/
     if(length <= 6 && length>=0){
         $("#input-letter").css("fontSize",'10rem');
         }else if (length > 6 && length <=15 ){
         $("#input-letter").css("fontSize",'8rem');
         }
         else if(length>15&&length<=28){
         $("#input-letter").css('font-size','6rem');
         }
         else if(length>28){
         $("#input-letter").css('font-size','4rem');
     }
 });
