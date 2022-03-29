const rootElem = document.querySelector('#portfolioMin');
const imgList = ['1.png', '2.png', '3.png'];
const mediaPath = 'portfolio/';
let imgIndex = 0;

const slider_container = document.createElement('div');
const slider_main = document.createElement('div');
const slider_film = document.createElement('div');
const slider_trigger = document.createElement('div');

const slider_trigger_left = document.createElement('div');
const slider_trigger_right = document.createElement('div');
slider_trigger_left.innerHTML = '<i class="fas fa-arrow-left"></i>';
slider_trigger_right.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';

slider_container.classList.add('slider-container');
slider_main.classList.add('slider-main');
slider_trigger.classList.add('slider-trigger');
slider_film.classList.add('slider-film');

slider_trigger.append(slider_trigger_left, slider_trigger_right);

slider_container.append(slider_main, slider_trigger);
slider_main.append(slider_film);
rootElem.append(slider_container);


const film_elems = imgList.map(img_name=>{
	const slider_width = slider_container.offsetWidth;
	const divElem = document.createElement('div');
	divElem.style.width = slider_width + 'px';
	divElem.style.backgroundImage = `url('${mediaPath+img_name}')`;
	return divElem
});

const render = ()=>{
	const slider_width = slider_container.offsetWidth;
	slider_film.style.right = slider_width * imgIndex + 'px';
}

const changeSize = ()=>{
	const slider_width = slider_container.offsetWidth;
	slider_film.style.width = slider_width * imgList.length + 'px';
	film_elems.forEach(elem => elem.style.width = slider_width + 'px');
	render();
}

window.addEventListener('resize', changeSize);
changeSize()



slider_film.append(...film_elems)



slider_trigger_left.addEventListener('click', ()=>{
	if (imgIndex > 0){
		imgIndex--;
	}else{
		imgIndex = imgList.length - 1;
	}
	render()
});

slider_trigger_right.addEventListener('click', ()=>{
	if (imgList.length - 1 > imgIndex){
		imgIndex++;
	}else{
		imgIndex = 0;
	}
	render()
});

