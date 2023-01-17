const fullPicture = document.querySelector('.big-picture');
const closePreview = fullPicture.querySelector('.big-picture__cancel');

// Открыть большое изображение


const openPreview = () => {
  fullPicture.classList.remove('hidden');
};

const show = (picture) => {
  fullPicture.querySelector('.big-picture__img > img').src = picture.url;
  fullPicture.querySelector('.likes-count').textContent = picture.likes;
  fullPicture.querySelector('.comments-count').textContent = picture.comments.length;
  fullPicture.querySelector('.social__caption').textContent = picture.description;

  closePreview.addEventListener('click', function () {
    fullPicture.classList.add('hidden');
  });
}


export { show, openPreview };




