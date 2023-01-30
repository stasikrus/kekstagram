import { createPicture } from './picture.js';
import './fullpicture.js';
import './upload-file.js';
import './validation.js';

fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      console.log(photos);
      createPicture(photos);
    });
