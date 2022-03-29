{
const portElem = document.querySelector('#portfolioMax');
const portList = ['1.png', '2.png', '3.png'];
const mediaPath = 'portfolio/';
let imgIndex = 0;

const galleryContainer = document.createElement('div');
const galleryMain = document.createElement('div');
const gallery_trigger = document.createElement('div');

const gallery_trigger_left = document.createElement('div');
const gallery_trigger_right = document.createElement('div');
gallery_trigger_left.innerHTML = '<i class="fas fa-arrow-left"></i>';
gallery_trigger_right.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';

galleryContainer.classList.add('gallery-container');
galleryMain.classList.add('gallery-main');
gallery_trigger.classList.add('gallery-trigger');

gallery_trigger.append(gallery_trigger_left, gallery_trigger_right);
galleryContainer.append(galleryMain, gallery_trigger);
portElem.append(galleryContainer);

const render = () =>{
    galleryMain.style.backgroundImage = `url('${mediaPath+portList[imgIndex]}')`;
    const liList = document.querySelectorAll('.gallery-points li');
    liList.forEach(t=>t.classList.remove('active'));
    liList[imgIndex].classList.add('active')
};

const ulElem = document.createElement('ul');
ulElem.classList.add('gallery-points');

ulElem.append(...portList.map((_,index)=>{
    const elem = document.createElement('li');
    elem.addEventListener('click', event =>{
        const liElem = event.target;
        const liList = [...liElem.parentNode.children];
        imgIndex = liList.indexOf(liElem)
        render();
    })
    return elem
}));
galleryContainer.append(ulElem)
render()

gallery_trigger_left.addEventListener('click', ()=>{
    console.log('left');
    if (imgIndex > 0){
        imgIndex--;
    }else{
        imgIndex = portList.length - 1;
    }
    render()
    console.log(imgIndex);
});

gallery_trigger_right.addEventListener('click', ()=>{
    console.log('right');
    if (portList.length - 1 > imgIndex){
        imgIndex++;
    }else{
        imgIndex = 0;
    }
    render()
    console.log(imgIndex);
});
}