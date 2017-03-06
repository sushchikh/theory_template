var  myScroll = window.pageYOffset || document.documentElement.scrollTop;
var featureTrigger = document.getElementById('featureTrigger');
var featuresContainer = getElementById('features_container');
// console.log(featureTrigger);
window.onscroll = function() {
if (myScroll > featureTrigger.getBoundingClientRect().top){
    featuresContainer.classList.add('show');
};
};




$(document).ready(function(){



/*счетчик, как далека мы пролистали нашу страницу, записывает в перемунную wScroll попиксельно нашу промотку*/

// $(window).scroll(function(){
//
// 	var wScroll = $(this).scrollTop();
// 	console.log(wScroll);
//
// });

//
//
// $(window).scroll(function(){
//
// 	var wScroll = $(this).scrollTop();
//
//     if (wScroll > )
//
//
//
// });
//
//




$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	if (wScroll > $('.header_nav').offset().top){
		$('.features_element').addClass('show');
	}
    // else {
    //     	$('.features_element').removeClass('show');
    // }


    // var wScroll = $(this).scrollTop();

    // if (wScroll > $('.features_container').offset().top){
    //     $('.peolpe_element').addClass('show');
    // }


    if (wScroll > $('.features_container').offset().top){
        $('.peolpe_element').each(function(i) {
            setTimeout(function(){
                $('.peolpe_element').eq(i).addClass('show');           
            }, 100 * (i+1));
        });
    }

});









});