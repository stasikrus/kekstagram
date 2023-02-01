import { createPicture } from './picture.js';
import './fullpicture.js';
import './upload-file.js';
import { getData, postData } from './api.js';
import './user-form.js';
import { closePopup } from "./fullpicture.js";

getData((photos) => {
  createPicture(photos);
});

postData(closePopup);
