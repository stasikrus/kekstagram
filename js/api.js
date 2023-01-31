import {showAlert} from './util.js';

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

fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then(checkStatus)
    .then((response) => response.json())
    .then((photos) => createPicture(photos))
    .catch((error) => {
      console.log(error);
      showAlert(error);
    });

    export { getData };
