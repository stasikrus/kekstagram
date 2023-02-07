import { show, openPreview, getComments, hiddenBlocks, scrollOff } from './fullpicture.js';


const list = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const imgFilters = document.querySelector('.img-filters');
const filterDefault = document.getElementById('filter-default');
const filterRandom = document.getElementById('filter-random');
const filterDiscussed = document.getElementById('filter-discussed');

console.log(filterDiscussed);

const createPicture = (photo) => {
  const similarListFragment = document.createDocumentFragment();

  photo.forEach((picture) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    openPreview();
    hiddenBlocks();
    scrollOff();
    show(picture);
    getComments(picture.comments);
  });

  similarListFragment.appendChild(pictureElement);

  });

  list.appendChild(similarListFragment);
  imgFilters.classList.remove('img-filters--inactive');
};


export { createPicture };
