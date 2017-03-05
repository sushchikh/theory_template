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

	if (wScroll > $('.header_title').offset().top){
		$('.features_element').addClass('show');
	}
    else {
        	$('.features_element').removeClass('show');
    }



    // if (wScroll > $('.how_container_title').offset().top){
    //     $('.number').each(function(i) {

    //         setTimeout(function(){
    //             $('.number').eq(i).addClass('show');           
    //         }, 100 * (i+1));
    //     });
    // }

});









});