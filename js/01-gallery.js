import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log
const $ = (item, type) => {

    if (type === true) {

        return console.log(typeof item)

    } else {

        return console.log(item)

    }

}

// variabels
const gallery = document.querySelector('.gallery');

// create element function
function createElement(preview, original, alt,) {
    return (`
    <li class='gallery__item'>
        <a class='gallery__link'>
            <img src="${preview}" alt="${alt}" class='gallery__image' data-original='${original}'>        
        </a>
    </li>`);
}

// create gallary function
const createGallery = galleryItems.map(elem => {

    return (
        createElement(elem.preview, elem.original, elem.description)
    )

})


// create preview gallery
gallery.insertAdjacentHTML('beforeend', createGallery.join(''));


// popup 
document.querySelector('.gallery').onclick = event => {

    if (event.target.classList.value === 'gallery__image') {
        
        basicLightbox.create(`
		    <img width="1280" height="853" src="${event.target.dataset.original}">
	    `).show()

    }

}