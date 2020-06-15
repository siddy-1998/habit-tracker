$(document).ready(function(){
     
    $('.not-done').on('click',function(){
        var $this = $(this);
        $this.closest('.dropdown').find('.items i')
        .removeClass().addClass("fas fa-times cross");
    
     });

     
     $('.none').on('click',function(){
        var $this = $(this);
        $this.closest('.dropdown').find('.items i')
        .removeClass();
    
     });

     $('.done').on('click',function(){
        var $this = $(this);
   $this.closest('.dropdown').find('.items i')
   .removeClass().addClass("fas fa-check tick");
    
  });

 

});


 