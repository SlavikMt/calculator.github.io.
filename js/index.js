
	
//calculator
 const display = document.querySelector('.calc .display')
document.querySelectorAll('.calc .num, .calc .op, .calc .sub, .calc .mul, .calc .del, .calc.sqrt, .calc.pow, .calc.x, .calc.perc, .calc.bksp,.calc.ac')
.forEach(btn => btn.addEventListener('click', numOperClick))
	function numOperClick(e){
display.value += e.target.innerText;
}

document.querySelector('.calc .eq')
  .addEventListener('click', function(){
  	display.value = eval(display.value)
  })


  
 
 document.querySelector('.calc .sqrt')

 document.querySelector('.calc .pow')
  .addEventListener('click', function(){
  	display.value = Math.pow(display.value, 2)
  })
  document.querySelector('.calc .x')
  .addEventListener('click', function(){
  	display.value = eval(1/display.value)
  })
document.querySelector('.calc .perc')
  .addEventListener('click', function(){
  	display.value = eval(0.01*display.value)
  })
  	
  

 document.querySelector('.calc .sqrt')
  .addEventListener('click', function(){
  	display.value = Math.sqrt(display.value)
  })

  document.querySelector('.calc .bksp')
  .addEventListener('click', function(){
  	display.value = display.value.substr( 0,display.value.length - 1);;
  })
  document.querySelector('.calc .ac')
  .addEventListener('click', function(){
  	display.value = display.value.substr( display.value);
  })
  