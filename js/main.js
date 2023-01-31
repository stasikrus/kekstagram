import { createPicture } from './picture.js';
import './fullpicture.js';
import './upload-file.js';
import './validation.js';
import { getData } from './api.js';


getData((photos) => {
  createPicture(photos);
});
