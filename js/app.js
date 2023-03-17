const fullImgBox = document.querySelector('.full-img');
const fullImg = document.querySelector('.selected-img');
const closeImg = document.querySelector('.close-img');
const menu = document.querySelector('.lat-menu');
const navigation = document.querySelector('.navigation');
const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', ()=>{
    events();
});

const events = () =>{
    menu.addEventListener('click', openMenu);
}

const openMenu = () =>{
    navigation.classList.remove('hide');
    closeButton();
}

const closeButton = () =>{
    const closeBtn = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('full-screen');
    console.log(overlay);
    if (document.querySelectorAll('.full-screen').length > 0) return;
    body.appendChild(overlay);
    closeBtn.textContent = 'x';
    closeBtn.classList.add('close-button');
    navigation.appendChild(closeBtn);
    closeMenu(closeBtn, overlay);
}

const closeMenu = (closeBtn, overlay) =>{
    closeBtn.addEventListener('click', () =>{
        navigation.classList.add('hide');
        body.removeChild(overlay);
        navigation.removeChild(closeBtn);
    });
    
    overlay.onclick = function(){
        body.removeChild(overlay);
        navigation.classList.add('hide');
        navigation.removeChild(closeBtn);
    }
}

/* Open and close the selected image*/
function openFullImg(imgSource){
    fullImg.setAttribute('src', imgSource);
    fullImgBox.classList.remove('hide');
    fullImgBox.classList.add('show');
}

closeImg.addEventListener('click', () =>{
    fullImgBox.classList.remove('show');
    fullImgBox.classList.add('hide');
});