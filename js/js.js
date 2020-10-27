var hi = document.querySelector('.hi__hi');

var coords = document.querySelector('.hi__hi img').getBoundingClientRect().top;


document.addEventListener("scroll",function(evt){


	if(window.pageYOffset+window.innerHeight-200>coords){
		hi.classList.add('hi-animation');
	}
});

var open = document.querySelector('.header-main__menu');
var close = document.querySelector('.menu .header-main__menu');

var menu = document.querySelector('.menu');

open.addEventListener('click',function(){
	menu.classList.add('show');
});

close.addEventListener('click',function(){
	menu.classList.add('hidden');
	setTimeout(()=>{
		menu.classList.remove('show');
		menu.classList.remove('hidden');
	},1000);

});

