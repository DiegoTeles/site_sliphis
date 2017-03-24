$(".btn_googleplay").hover(function(){
  $(this).toggleClass("is-active");
})


$(document).ready(function(){
    $(".btn_googleplay").mouseover(function(){
        var div = $(".btn_googleplay");
        div.animate({left: '100px'}, "slow");
        div.animate({fontSize: '3em'}, "slow");
    });
});

// FadeTo method
// $(function(){
//     $('#cell_img_slider1').hover(function(){
//         $(this).fadeTo(300, 1);
//     },
//     function(){
//         $(this).fadeTo(200, .6);
//     });
// });


var Slideshow = {

    navigate: function() {
        $('a', '#slideshow-nav').mouseover(function(e) {
            e.preventDefault();
            var $a = $(this);
            var slide = $($a.attr('href'));
            var wrapper = $('#slideshow-wrapper');

            wrapper.animate({
                left: -slide.position().left
            }, 1000, 'linear', function() {
                $a.addClass('active').siblings().removeClass('active');
            });

        });
    },

    init: function() {
        this.navigate();
    }

};


Slideshow.init();


// $(document).ready(function(){
    
//     $("#imagem01").on('mouseover', function () {
//         console.log("chegando aqui!");
//         $("#imagem02").show();
//     }).mouseout(function () {
//         $("#imagem02").hide();
//     });
    
// });

// $(document).ready(function(){
//        $("#imagem01").mouseover(function(){
//     $("#imagem01").hide();
//         });
//     $("#imagem01").mouseover(function(){
//          $("#imagem02").show();
//     });
// });

// $(document).ready(function(){
//        $("#imagem02").mouseover(function(){
//     $("#imagem02").hide();
//         });
//     $("#imagem02").mouseover(function(){
//          $("#imagem01").show();
//     });
// });



// $(document).ready(function(){
//        $("#imagem03").mouseover(function(){
//     $("#imagem03").hide();
//         });
//     $("#imagem03").mouseover(function(){
//          $("#imagem04").show();
//     });
// });

// $(document).ready(function(){
//        $("#imagem04").mouseover(function(){
//     $("#imagem04").hide();
//         });
//     $("#imagem04").mouseover(function(){
//          $("#imagem03").show();
//     });
// });


// $(document).ready(function(){
//        $("#imagem06").mouseover(function(){
//     $("#imagem06").hide();
//         });
//     $("#imagem06").mouseover(function(){
//          $("#imagem05").show();
//     });
// });

// $(document).ready(function(){
//        $("#imagem05").mouseover(function(){
//     $("#imagem05").hide();
//         });
//     $("#imagem05").mouseover(function(){
//          $("#imagem06").show();
//     });
// });

// $(document).ready(function(){
//        $("#imagem08").mouseover(function(){
//     $("#imagem08").hide();
//         });
//     $("#imagem08").mouseover(function(){
//          $("#imagem07").show();
//     });
// });

// $(document).ready(function(){
//        $("#imagem07").mouseover(function(){
//     $("#imagem07").hide();
//         });
//     $("#imagem07").mouseover(function(){
//          $("#imagem08").show();
//     });
// });



 var step = 0;
 console.log("Aqui");
$('.right').click(function(){
  if ( step == 3 ) return;
  $('.album').eq(step).animate({'margin-left':'-355px'});
  $('.info').eq(step).animate({'margin-left':'-100000px'});
  step += 1;
});

$('.left').click(function(){
  if ( step == 0 ) return;
  console.log( step );
  console.log( $('.album') );
  $('.album').eq(step-1).animate({'margin-left':0});
  $('.info').eq(step-1).animate({'margin-left':0});
  step -= 1;
});


$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'3'},800);
                    
            }
            
        }); 
    
    });
    
});



// $(document).ready(function(){
//     $('.venobox').venobox({
//         framewidth: '400px',        // default: ''
//         frameheight: '300px',       // default: ''
//         border: '10px',             // default: '0'
//         bgcolor: '#5dff5e',         // default: '#fff'
//         titleattr: 'data-title',    // default: 'title'
//         numeratio: true,            // default: false
//         infinigall: true,            // default: false
//         spinner: 'wandering-cubes'


// }); 
// });


var curr_lb_div;
var is_modal = false;

function ShowLightBox(lb_div, isModal) {
document.getElementById(lb_div).style.display='block';
document.getElementById('fade').style.display='block';
curr_lb_div = lb_div;
 if (isModal)
	 is_modal = true;
 else is_modal = false;
 
 setCenter(lb_div, isModal);
 //setDimensions(lb_div);
}

function HideLightBox() {
	if (document.getElementById(curr_lb_div)) {
		  document.getElementById(curr_lb_div).style.display='none';
		  document.getElementById('fade').style.display='none';
		  curr_lb_div = '';
	 }
}

function setCenter(lb_div, isModal) {
var div = document.getElementById(lb_div);

var newX = div.offsetWidth / 2;
var newY = div.offsetHeight / 2;

div.style.marginLeft = '-'+newX+'px';
div.style.marginTop = '-'+newY+'px';

}


$(document).ready(function(){
				//Examples of how to assign the Colorbox event to elements
				$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
				$(".callbacks").colorbox({
					onOpen:function(){ alert('onOpen: colorbox is about to open'); },
					onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
					onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
					onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
					onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
				});

				
				//Example of preserving a JavaScript event for inline calls.
				$("#click").click(function(){ 
					$('#click').css({
                        "background-color":"black",
                         "color":"#fff",
                          "cursor":"inherit"
                        }).text("Abra em outra janela!");
					return false;
				});
			});

           