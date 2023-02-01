import {showAlert} from './util.js';
import { closePopup } from "./fullpicture.js";

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }

  const {statusText, status} = response;
  throw new Error(`${status} — ${statusText}`);
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

const postData = (onSuccess) =>{
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
