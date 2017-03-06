
var myScroll = window.pageYOffset || document.documentElement.scrollTop;
var featureTrigger = document.getElementById('featureTrigger');
var peopleTrigger = document.getElementById('peopleTrigger');
var advantagesTrigger = document.getElementById('advantagesTrigger');

var featuresArray = [];
featuresArray[0] = document.getElementById('features_container').firstElementChild;
featuresArray[1] = document.getElementById('features_container').firstElementChild.nextElementSibling;
featuresArray[2] = document.getElementById('features_container').lastElementChild;

var peopleArray = [];
peopleArray[0] = document.getElementById('people_container').firstElementChild;
peopleArray[1] = document.getElementById('people_container').firstElementChild.nextElementSibling;
peopleArray[2] = document.getElementById('people_container').firstElementChild.nextElementSibling.nextElementSibling;
peopleArray[3] = document.getElementById('people_container').firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;

var advantagesArray = [];
advantagesArray[0] = document.getElementById('advantages_container').firstElementChild;
advantagesArray[1] = document.getElementById('advantages_container').firstElementChild.nextElementSibling;



// функция добавления классов для анимации
function addShowClass(myArray) {
  var i = 0;
  var timerId = setTimeout(function go() {
    if (i < myArray.length-1) setTimeout(go, 200);
    myArray[i].classList.add('show');
    i++;
  }, 100);
};


//функция определения, достигло ли скролл-место верха триггерного элемента
window.onscroll = function(){
    if (myScroll > featureTrigger.getBoundingClientRect().top){
        addShowClass(featuresArray);
    };
    if (myScroll > peopleTrigger.getBoundingClientRect().top){
        addShowClass(peopleArray);
    };
    if (myScroll > advantagesTrigger.getBoundingClientRect().top){
        addShowClass(advantagesArray);
    };
};

