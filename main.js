let roll=document.getElementById('roll') ;
let max = 10;
let min = 1;
let label = document.getElementById('randomnum');
let randomnumber;
roll.onclick = function(){
  randomnumber = Math.floor(Math.random() * max) + min;
  console.log(randomnumber);
  document.getElementById('randomnum').textContent=randomnumber;
}