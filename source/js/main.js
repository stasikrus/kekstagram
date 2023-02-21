/* global _:readonly */

import { createPicture, setFilterClick, sortedPhoto } from './picture.js';
import './fullpicture.js';
import './upload-file.js';
import { getData, postData } from './api.js';
import './validation.js';
import { closeFormCreate } from "./upload-file.js";

const RERENDER_DELAY = 500;

getData((photos) => {
  createPicture(photos);
  setFilterClick( _.debounce (
    () => sortedPhoto(photos),
    RERENDER_DELAY,
  ));
});

postData(closeFormCreate);
