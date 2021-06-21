let header = document.getElementById('Header');
let linkHeader = document.getElementById('link-header:hover')

window.addEventListener("scroll", function(){
	let scroll = window.scrollY;
	if(scrollY > 0){
		header.style.backgroundColor = 'var(--web-blue)';
	} else{
		header.style.backgroundColor = 'transparent';
	}
})

window.sr = ScrollReveal();

	sr.reveal('.main-title', {
		duration:5000,
		// origin:'bottom',
		// distance: '-500px',
	})
	sr.reveal('.main-know',{
		duration:4000,
		// origin:'bottom',
		// distance: '-500px',
	})
	sr.reveal('.header-right',{
		duration:3000,
		origin:'bottom',
		distance:'-100px',
	})
	sr.reveal('.left-img',{
		duration:4000,
		rotate:{
			x: 1,
			y:180,
		}
	})