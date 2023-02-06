import {showAlert} from './util.js';

const userForm = document.querySelector('.img-upload__form');
const sucessTemplate = document.querySelector('#success').content.querySelector('.success');
const inputHashtag = document.querySelector('.text__hashtags');
const inputComment = document.querySelector('.text__description');

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }

  const {statusText, status} = response;
  throw new Error(`${status} — ${statusText}`);
}

const sucessMessage = () => {
  const sucessElement = sucessTemplate.cloneNode(true);
  document.body.insertBefore(sucessElement, document.body.lastChild);

  const sucessClose = sucessElement.querySelector('.success__button');

  sucessClose.addEventListener('click', () => {
    sucessElement.remove();
  })
}

const clearInput = () => {
  inputComment.value = '';
  inputHashtag.value = '';
}


const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then(checkStatus)
    .then((response) => response.json())
    .then((photos) => onSuccess(photos))
    .catch((error) => {
      console.log(error);
      showAlert(error);
    });
}

const postData = (onSuccess) => {
  userForm.addEventListener('submit', (evt) => {
   evt.preventDefault();

   const formData = new FormData(evt.target);

   fetch(
     'https://23.javascript.pages.academy/kekstagram',
     {
       method: 'POST',
       body: formData,
     },
    )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        sucessMessage();
        clearInput();
      } else {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      showAlert('Не удалось отправить форму. Попробуйте ещё раз');
    });
  });
};


export { getData, postData };
