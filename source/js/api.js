import {showAlert} from './util.js';
import { closeFormCreate } from './upload-file.js';
import { Keys } from './upload-file.js';

const userForm = document.querySelector('.img-upload__form');
const sucessTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
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

const errorMessage = () => {
  closeFormCreate();
  const errorElement = errorTemplate.cloneNode(true);
  document.body.insertBefore(errorElement, document.body.lastChild);

  const errorClose = errorElement.querySelector('.error__button');

  errorClose.addEventListener('click', () => {
    errorElement.remove();
  })
  document.addEventListener('keyup', (evt) => {
    if (evt.key === Keys.ESC || evt.key === Keys.ESCAPE) {
      errorElement.remove();
    }
  });
}


const clearInput = () => {
  inputComment.value = '';
  inputHashtag.value = '';
};


const getData = (onSuccess) => {
  fetch('https://24.javascript.pages.academy/kekstagram/data')
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
     'https://234.javascript.pages.academy/kekstagram',
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
        errorMessage();
        clearInput();
      }
    })
    .catch(() => {
      showAlert('Не удалось отправить форму. Попробуйте ещё раз');
    });
  });
};


export { getData, postData };