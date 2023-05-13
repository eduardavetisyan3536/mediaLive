let click1 = document.querySelectorAll(".click");
let table1 = document.querySelector(".contTable1");
let table2 = document.querySelector(".contTable2");
let table3 = document.querySelector(".contTable3");
let index = 0;

click1[0].onclick = function () {
  index++;
  table1.style.zIndex = `${index}`;
};
click1[1].onclick = function () {
  index++;
  table2.style.zIndex = `${index}`;
};
click1[2].onclick = function () {
  index++;
  table3.style.zIndex = `${index}`;
};

//                  Constructor
let width = document.querySelector('.width')
let height = document.querySelector('.height')
let text = document.querySelector('.text')
let color = document.querySelector('.color')
let radius = document.querySelector('.radius')
let shadow = document.querySelector('.shadow')
let variable = document.querySelector('.variable')

width.addEventListener('keyup', (e) => {
    variable.style.width = e.target.value + 'px'
})
height.addEventListener('keyup', (e) => {
        variable.style.height = e.target.value + 'px'
})
text.addEventListener('keyup', (e) => {
    variable.innerHTML = e.target.value
})
color.addEventListener('keyup', (e) => {
    variable.style.backgroundColor = e.target.value
})
radius.addEventListener('keyup', (e) => {
    variable.style.borderRadius = e.target.value + 'px'
})
shadow.addEventListener('keyup', (e) => {
    variable.style.boxShadow = e.target.value
})