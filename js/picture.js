import { createDescription } from './data.js';
import { show, openPreview } from './fullpicture.js';

const list = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const createPicture = createDescription();

const similarListFragment = document.createDocumentFragment();


createPicture.forEach((picture) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    openPreview();
    show(picture);
  });

  similarListFragment.appendChild(pictureElement);

});

list.appendChild(similarListFragment);


