// вариант 1 через переменные 

// var  myScroll = window.pageYOffset || document.documentElement.scrollTop;
// var featureTrigger = document.getElementById('featureTrigger');
// var featuresElement1 = document.getElementById('features_container').firstElementChild;
// var featuresElement2 = document.getElementById('features_container').firstElementChild.nextElementSibling;
// var featuresElement3 = document.getElementById('features_container').lastElementChild;

// window.onscroll = function() {
// if (myScroll > featureTrigger.getBoundingClientRect().top){

//     featuresElement1.classList.add('show');

//     window.setTimeout(showFeatures2, 200);
//     function showFeatures2(){featuresElement2.classList.add('show');};
    
//     window.setTimeout(showFeatures3, 400);
//     function showFeatures3(){featuresElement3.classList.add('show');};
// };
// };




//вариент 2 через массив

// var myScroll = window.pageYOffset || document.documentElement.scrollTop;
// var featureTrigger = document.getElementById('featureTrigger');

// var myArray = [];
// myArray[0] = document.getElementById('features_container').firstElementChild;
// myArray[1] = document.getElementById('features_container').firstElementChild.nextElementSibling;
// myArray[2] = document.getElementById('features_container').lastElementChild;

// window.onscroll = function(){
//     if (myScroll > featureTrigger.getBoundingClientRect().top){
//         window.setTimeout(function(){myArray[0].classList.add('show')}, 0);
//         window.setTimeout(function(){myArray[1].classList.add('show')}, 200);
//         window.setTimeout(function(){myArray[2].classList.add('show')}, 400);
//     };
// };



// вариант 3 через функцию


var myScroll = window.pageYOffset || document.documentElement.scrollTop;
var featureTrigger = document.getElementById('featureTrigger');

var myArray = [];

myArray[0] = document.getElementById('features_container').firstElementChild;
myArray[1] = document.getElementById('features_container').firstElementChild.nextElementSibling;
myArray[2] = document.getElementById('features_container').lastElementChild;

window.onscroll = function(){
    if (myScroll > featureTrigger.getBoundingClientRect().top){
        addShowClass();
    	window.onscroll = null;
    };
};

function addShowClass() {
  var i = 0;
  var timerId = setTimeout(function go() {
    if (i < myArray.length-1) setTimeout(go, 200);
    myArray[i].classList.add('show');
    i++;
  }, 100);
}



