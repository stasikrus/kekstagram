import { createPicture } from './picture.js';
import './fullpicture.js';
import './upload-file.js';
import { getData, postData } from './api.js';
import './validation.js';
import { closeFormCreate } from "./upload-file.js";

getData((photos) => {
  createPicture(photos);
});

postData(closeFormCreate);
