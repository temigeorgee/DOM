//1
document.getElementById('container');
//2
document.querySelector('#container');
//3
document.getElementsByClassName('second');
//4
document.querySelector('ol.third');
//5
var container = document.getElementById('container')
container.innerText = "Hello!";
//6
var footer = document.querySelector('.footer');
footer.classList.add('main');
//7
var footer = document.querySelector('.footer');
footer.classList.remove('main')
//8
document.createElement('li');
//9
var list = document.createElement('li');
list.innerText = 'four'; 
//10
var listItem = document.querySelector('ul')
listItem.appendChild('list');
//11
let allLisInsideOl = document.querySelectorAll('ol , li') 
for (let i= 0; i < allLisInsideOl.length; i++) {
   allLisInsideOl.style.backgroundColor = 'green';  
}
//12
var footer = document.querySelector('.footer');
footer.remove('div')



//PART 1  <!-- EVENT SECTION -->
document.addEventListener("DOMContentLoaded",function(){
    var change = document.getElementById('change_heading');
    change.innerHTML = 'Hello World!'
    var section = document.querySelector('section')
   section.addEventListener("mouseover",function(event){
  var selected = document.querySelector('.selected')
  selected.innerText = event.target.className
  })
  var newDiv = document.createElement("div");
    newDiv.className = "purple";
    section.appendChild(newDiv);
})


//PART 2

document.addEventListener("DOMContentLoaded",function(){
    var change = document.getElementById('change_heading');
    change.innerHTML = 'Hello World!'
    var section = document.querySelector('section')
  section.addEventListener("mouseover",function(event){
  var selected = document.querySelector('.selected')
  selected.innerText = event.target.className
  })
  var newDiv = document.createElement("div");
    newDiv.className = "purple";
    section.appendChild(newDiv);
    
    var button = document.querySelector("button");
    var car1 = document.querySelector('.car1');
    var car2 = document.querySelector('.car2');
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;

    function reset(car1, car2){
        clearTimeout(car1.timer);
        clearTimeout(car2.timer);
        car1.style.marginLeft = 0;
        car2.style.marginLeft = 0;
        button.disabled = false;
    }

    button.addEventListener("click", function(event){
        button.disabled = true;
        car1.timer = setInterval(function(){
            car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random()*60 + 'px';
            if(parseInt(car1.style.marginLeft) > window.innerWidth){
                alert("Car 1 wins!");
                reset(car1,car2);
            }
        },60)

        car2.timer = setInterval(function(){
            car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random()*60 + 'px';
            if(parseInt(car2.style.marginLeft) > window.innerWidth){
                alert("Car 2 wins!");
                reset(car1,car2);
            }
        },60)


    })
})

 