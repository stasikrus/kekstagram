const fullPicture = document.querySelector('.big-picture');
const closePreview = fullPicture.querySelector('.big-picture__cancel');
const commentsList = fullPicture.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');
const commentCount = fullPicture.querySelector('.social__comment-count');
const commentsLoader = fullPicture.querySelector('.comments-loader');
const bodyHtml = document.querySelector('body');

const commentsButton = document.querySelector('.comments-loader');

const ITEMS_COUNT_PER_CLICK = 5;



const commentsButtonClick = () => {
  const commentItem = document.querySelectorAll('.social__comment');

  for (let i = ITEMS_COUNT_PER_CLICK; i < commentItem.length; i++) {
      commentItem[i].classList.add('hidden');
  }

  if (ITEMS_COUNT_PER_CLICK < commentItem.length) {
    commentsButton.classList.remove('hidden');

    commentsButton.addEventListener('click', () => {
      for (let i = ITEMS_COUNT_PER_CLICK; i <= ITEMS_COUNT_PER_CLICK + 5; i++) {
        commentItem[i].classList.remove('hidden');
      }
    })
  }
}

// Открыть большое изображение

const openPreview = () => {
  commentsList.innerHTML = '';
  fullPicture.classList.remove('hidden');
};

const hiddenBlocks = () => {
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};

const scrollOff = () => {
  bodyHtml.classList.add('modal-open');
};

const closePopup = () => {
  fullPicture.classList.add('hidden');
  commentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  bodyHtml.classList.remove('modal-open');
  commentsList.innerHTML = '';
};

const getComments = (comments) => {
  let commentListFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentElement = commentTemplate.cloneNode(true);

    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;

    commentListFragment.appendChild(commentElement);
  });

  commentsList.appendChild(commentListFragment);
};


const show = (picture) => {
  fullPicture.querySelector('.big-picture__img > img').src = picture.url;
  fullPicture.querySelector('.likes-count').textContent = picture.likes;
  fullPicture.querySelector('.comments-count').textContent = picture.comments.length;
  fullPicture.querySelector('.social__caption').textContent = picture.description;

  closePreview.addEventListener('click', () => {
    closePopup()
  });
  document.addEventListener('keyup', (evt) => {
    if (evt.key === "Escape") {
      closePopup()
    }
  });

};

export { show, openPreview, getComments, hiddenBlocks, scrollOff, bodyHtml, closePopup, commentsButtonClick };
