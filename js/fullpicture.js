const fullPicture = document.querySelector('.big-picture');
const closePreview = fullPicture.querySelector('.big-picture__cancel');
const comment = fullPicture.querySelector('.social_comment');

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


const getComments = (picture) => {
  for (let i = 0; i < picture.comments.length; i++) {
    const commentElement = comment.cloneNode(true);

    commentElement.querySelector('.social_picture').src = picture.comments.avatar;

  }

};

