import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

// create element function
function createElement(preview, original, alt,) {
    return (`
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${alt}"
        />
    </a>
    </li>
    `);
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

        event.preventDefault()

        const instance = basicLightbox.create(`
		    <img width="1280" height="853" src="${event.target.dataset.source}">
	    `, {
            onShow: (instance) => {

                document.onkeydown = event => {

                    if (event.key === 'Escape') {
                        instance.close();
                    }

                }

            }
        })

        instance.show();

    }

}