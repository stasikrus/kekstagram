import { createDescription } from './data.js';


const list = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const createPicture = createDescription();

const similarListFragment = document.createDocumentFragment();


createPicture.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  similarListFragment.appendChild(pictureElement);

});

list.appendChild(similarListFragment);


