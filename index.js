'use strict'
const imageContainerElm = document.querySelector('.image-container');

const btnElm = document.querySelector('.btn');
// const numImg = document.querySelector('.number').value;


let imageNum = 4; //it updated js system , old version without declare can be acess

btnElm.addEventListener('click', ()=> {
    imageNum;
    addNewImages();
});


function addNewImages() {
    for (let index = 0; index < imageNum; index++){
    const newImgElm = document.createElement('img');
    newImgElm.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    imageContainerElm.appendChild(newImgElm);
    }
}

