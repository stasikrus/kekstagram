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
const slider = createForm.querySelector('.effect-level__slider');
const valueElement = createForm.querySelector('.effect-level__value');
const filterBase = ['', 'effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat'];
const filterField = createForm.querySelector('.img-upload__effect-level');
const Keys = {
  ESC: 'Esc',
  ESCAPE: 'Escape',
};

const showFormCreate = () => {
  createForm.classList.remove('hidden');
  bodyHtml.classList.add('modal-open');
  filterField.classList.add('hidden');
};

const closeFormCreate = () => {
  createForm.classList.add('hidden');
  bodyHtml.classList.remove('modal-open');
  uploadFile.value = '';
  scaleValue.value = '';
  imgPreview.style.transform = '';
  imgPreview.removeAttribute('class');
  imgPreview.removeAttribute('style');
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

  for (let i = 0; i < filterInput.length; i++) {
    filterInput[i].addEventListener('change', () => {
    imgPreview.removeAttribute('class');
    imgPreview.classList.add(filterBase[i]);
    filterField.classList.remove('hidden');

      const x = filterBase;
      switch(x[i]) {
        case x[1]:
          slider.noUiSlider.updateOptions({
            range: {
                min: 0,
                max: 1,
            },
            step: 0.1,
            start: [1],
          });
          filterCount(x[1]);
          break;
        case x[2]:
          slider.noUiSlider.updateOptions({
            range: {
                min: 0,
                max: 1,
            },
            step: 0.1,
            start: [1],
          });
          filterCount(x[2]);
          break;
        case x[3]:
          slider.noUiSlider.updateOptions({
            range: {
                min: 0,
                max: 100,
            },
            step: 1,
            start: [100],
          });
          filterCount(x[3]);
          break;
        case x[4]:
          slider.noUiSlider.updateOptions({
            range: {
                min: 0,
                max: 3,
            },
            step: 0.1,
            start: [3],
          });
          filterCount(x[4]);
          break;
        case x[5]:
          slider.noUiSlider.updateOptions({
            range: {
                min: 1,
                max: 3,
            },
            step: 0.1,
            start: [3],
            });
            filterCount(x[5]);
            break;
        }
    });
  };
  filterInput[0].addEventListener('click', () => {
    imgPreview.removeAttribute('style');
    filterField.classList.add('hidden');
  });
};

noUiSlider.create(slider, {
  start: [0],
  step: 1,
  connect: 'lower',
  range: {
      'min': 0,
      'max': 100
  }
});

const filterCount = (filter) => {
  slider.noUiSlider.on('update', (_, handle, unencoded) => {
    valueElement.value = unencoded[handle];

  switch(filter) {
    case filterBase[1]:
      imgPreview.style.filter = `grayscale(${valueElement.value})`;
      break;
    case filterBase[2]:
      imgPreview.style.filter = `sepia(${valueElement.value})`;
      break;
    case filterBase[3]:
      imgPreview.style.filter = `invert(${valueElement.value}%)`;
      break;
    case filterBase[4]:
      imgPreview.style.filter = `blur(${valueElement.value}px)`;
      break;
    case filterBase[5]:
      imgPreview.style.filter = `brightness(${valueElement.value})`;
      break;
    }
  });
}


uploadFile.addEventListener('change', () => {
  showFormCreate();
  changeScale(100);



  closeButton.addEventListener('click', () => {
    closeFormCreate();
  });

  document.addEventListener('keyup', (evt) => {
    if (evt.key === Keys.ESC || evt.key === Keys.ESCAPE) {
      closeFormCreate();
    }
  });
});


changeFilter();

export { Keys, closeFormCreate };
