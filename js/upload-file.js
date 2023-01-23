import { bodyHtml } from './fullpicture.js';

const uploadSection = document.querySelector('.img-upload');
const uploadFile = uploadSection.querySelector('#upload-file');
const createForm = uploadSection.querySelector('.img-upload__overlay');
const closeButton = createForm.querySelector('.img-upload__cancel');
const buttonSmaller = createForm.querySelector('.scale__control--smaller');
const buttonBigger = createForm.querySelector('.scale__control--bigger');
let scaleValue = createForm.querySelector('.scale__control--value');
const imgPreview = createForm.querySelector('.img-upload__preview > img');
const filterList = createForm.querySelector('.effects__list');
const filterInput = filterList.querySelectorAll('.effects__radio');


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

const changeFilter = () => {
   const filterBase = ['', 'effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat']
   for (let i = 0; i < filterInput.length; i++) {
    filterInput[i].addEventListener('change', () => {
        imgPreview.classList.toggle(filterBase[i]);
        console.log(filterBase[2]);
    })




   }



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


changeFilter();


