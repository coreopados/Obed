$(document).ready(function () {


  if($('.slider-dish1').length>0){
    var swiper = new Swiper(".slider-dish1", {
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".swiper-pagination1",
        clickable:true,
      },
    });
  }
    
  if($('.slider-dish2').length>0){
    var swiper2 = new Swiper(".slider-dish2", {
      autoHeight:true,
      pagination: {
        el: ".swiper-pagination2",
        clickable:true,
      },
      autoplay: {
        delay: 5000,
      },
    });
  }

  if($('.what-swiper').length>0){
    var swiper3 = new Swiper(".what-swiper ", {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination3",
        clickable:true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints:{
        870:{
          slidesPerView: 2,
        },
        768:{
          slidesPerView:2,
        },
        576:{
          slidesPerView:2,
        },
        480:{
          slidesPerView:1,
        },
        320:{
          slidesPerView:1,
        }
      }
    });
  }
 
if($('.suggestion-wrap.mob-ver').length>0){
  var swiper4 = new Swiper(".suggestion-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    breakpoints:{
      870:{
        slidesPerView: 3,
      },
      768:{
        slidesPerView:2,
      },
      576:{
        slidesPerView:2,
      },
      480:{
        slidesPerView:1,
      },
      320:{
        slidesPerView:1,
      }
    }
  });
}

      $('.close-dialog').click(function(){
        $('.chat-dialog').addClass('hidden')
      })

      $('.chat').click(function(){
        $('.chat-dialog').removeClass('hidden')
      })


//profile popup
      $('.profile').click(function(e){
        e.preventDefault();
        $('.layer, .enter-popup').addClass('show')
        $('.bottom-head').addClass('active')
      })

//recall
      $('.recall').click(function(e){
        e.preventDefault();
        $('.layer, .recall-popup').addClass('show')
        $('.bottom-head').addClass('active')
      })



//layer
      $('.layer').click(function(e){
        e.preventDefault();
        $('.layer, .popup').removeClass('show')
        $('.bottom-head').removeClass('active')
      })
// close popup
      $('.close-popup').click(function(){
        $('.popup, .layer').removeClass('show')
        $('.bottom-head').removeClass('active')
      })




      $('textarea').each(function(i,elem){
        $(elem).val('')
      })


      $('input[name="phone"]').inputmask('+7(999) 999 999');


      $('.mobile-menu-button').click(function(){
        $('.menu').toggleClass('active')
        $('.bottom-head').toggleClass('active')
      })



      $('.to-top').click(function(){
        $('body').animate({scrollTop:0}, 'slow')
      })
      

// plus minus

$('.buttons__count .plus').click(function(e){
  e.preventDefault();
  var count = +$(this).closest(".buttons__count").find('.number').text();
  count = count+1;

  $(this).closest(".buttons__count").find('.number').text(count)
})

$('.buttons__count .minus').click(function(e){
  e.preventDefault();
  var count = +$(this).closest(".buttons__count").find('.number').text();
  if (count > 1){
    count = count-1;
  }

  $(this).closest(".buttons__count").find('.number').text(count)
})








      // add cross mobile
      if(innerWidth<991){
        $('<button class="close-menu"><svg xmlns="http://www.w3.org/2000/svg" height="329pt" viewBox="0 0 329.26933 329" width="329pt"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg></button>').prependTo('.menu')
      }


      $(document).on('click', '.close-menu', function(){
        $('.menu, .bottom-head').removeClass('active') 
      })

      if(innerWidth < 480){
        $('.how-block-2 .img-step').insertAfter('.how-block-1 .text')
      }
      
      if(innerWidth < 991){
       
        $('.main-contact-wrap .left-part .luk').insertAfter('.main-contact-wrap .right-part')
        $('.main-contact-wrap .left-part .tomato').insertAfter('.main-contact-wrap .right-part')
      }
});





// resize
$(window).on('resize', function(){

  if(!$('.close-menu').length>0){
    if(innerWidth<991){
      $('<button class="close-menu"><svg xmlns="http://www.w3.org/2000/svg" height="329pt" viewBox="0 0 329.26933 329" width="329pt"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg></button>').prependTo('.menu')
    }else{
      $('.close-menu').remove();
    }
  }
  



  if(innerWidth < 991){
       
    $('.main-contact-wrap .left-part .luk').insertAfter('.main-contact-wrap .right-part')
    $('.main-contact-wrap .left-part .tomato').insertAfter('.main-contact-wrap .right-part')
  }else{
    $('.main-contact-wrap .luk').insertAfter('.main-contact-wrap .left-part .contact-subtitle')
    $('.main-contact-wrap .tomato').insertAfter('.main-contact-wrap .left-part .contact-subtitle' )
  }
})