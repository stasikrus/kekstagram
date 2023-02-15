import { show, openPreview, getComments, hiddenBlocks, scrollOff, commentsButtonClick } from './fullpicture.js';


const list = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const imgFilters = document.querySelector('.img-filters');
const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');
const form = imgFilters.querySelector('.img-filters__form');

const PHOTO_RANDOM_AMOUNT = 10;

const compareRandom = () => Math.random() - 0.5;

const createPicture = (photo, compareFunction, photosAmount) => {
  const similarListFragment = document.createDocumentFragment();
  const allPhotos = document.querySelectorAll('.picture');

  photo
    .slice()
    .sort(compareFunction)
    .slice(0, photosAmount)
    .forEach((picture) => {
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
        commentsButtonClick();
      });

  similarListFragment.appendChild(pictureElement);
  });
  console.log(allPhotos);

  allPhotos.forEach((photo) => { photo.remove(); });
  list.appendChild(similarListFragment);
  imgFilters.classList.remove('img-filters--inactive');
};

const setFilterClick = (cb) => {
  form.addEventListener('click', (evt) => {
    imgFilters.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    cb();
  });
};


const compareComments = (photoA, photoB) => {
  const commentsAmountA = photoA.comments.length;
  const commentsAmountB = photoB.comments.length;

  return commentsAmountB - commentsAmountA;
};


const sortedPhoto = (photos) => {
    if (filterDefault.classList.contains('img-filters__button--active')) {
      createPicture(photos);
  } else if (filterRandom.classList.contains('img-filters__button--active')) {
      console.log(12);
      createPicture(photos, compareRandom, PHOTO_RANDOM_AMOUNT);
  } else if (filterDiscussed.classList.contains('img-filters__button--active')) {
      createPicture(photos, compareComments);
  }
};


export { createPicture, setFilterClick, sortedPhoto };
