import { createPicture, setRandomClick, setDefaultClick } from './picture.js';
import './fullpicture.js';
import './upload-file.js';
import { getData, postData } from './api.js';
import './validation.js';
import { closeFormCreate } from "./upload-file.js";

//const RERENDER_DELAY = 500;


getData((photos) => {
  createPicture(photos);
  setRandomClick(photos);
  setDefaultClick(photos);
});

postData(closeFormCreate);

