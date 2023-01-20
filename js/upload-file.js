import { bodyHtml } from './fullpicture.js';

const uploadSection = document.querySelector('.img-upload');
const uploadFile = uploadSection.querySelector('#upload-file');
const createForm = uploadSection.querySelector('.img-upload__overlay');
const closeButton = createForm.querySelector('.img-upload__cancel');
const buttonSmaller = createForm.querySelector('.scale__control--smaller');
const buttonBigger = createForm.querySelector('.scale__control--bigger');
let scaleValue = createForm.querySelector('.scale__control--value');
const imgPreview = createForm.querySelector('.img-upload__preview');


const showFormCreate = () => {
  createForm.classList.remove('hidden');
  bodyHtml.classList.add('modal-open');
};

const closeFormCreate = () => {
  createForm.classList.add('hidden');
  bodyHtml.classList.remove('modal-open');
  uploadFile.value = '';
  scaleValue.value = '';
  imgPreview.style.transform = '';
};


const scaleCreate = (num) => {
  let create = num / 100;
  imgPreview.style.transform = `scale(${create})`;
}

const changeScale = (scale) => {
  scaleValue.value = scale;
  let scaleCount = scaleValue.value;
  Number(scaleCount);


  buttonSmaller.addEventListener('click', () => {
    if (scaleCount >= 50) {
      scaleCount -= 25;
      scaleValue.value = scaleCount;
      scaleCreate(scaleCount);
    }
  });

  buttonBigger.addEventListener('click', () => {
    if (scaleCount <= 75) {
      scaleCount += 25;
      scaleValue.value = scaleCount;
      scaleCreate(scaleCount);
    } else if (scaleCount = 100) {
      scaleValue.value = scaleCount;
      scaleCreate(scaleCount);
    }
  });

};

uploadFile.addEventListener('change', () => {
  showFormCreate();
  changeScale(100);

  closeButton.addEventListener('click', () => {
    closeFormCreate();
  });

  document.addEventListener('keyup', (evt) => {
    if (evt.key === "Escape") {
      closeFormCreate();
    }
  });
});





