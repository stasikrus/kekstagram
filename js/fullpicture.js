const fullPicture = document.querySelector('.big-picture');
const picture = document.querySelectorAll('.picture');
const closeButton = fullPicture.querySelector('.big-picture__cancel');

// Открыть большое изображение

  picture.forEach(gallery => {
   gallery.addEventListener('click', function (evt) {
   evt.preventDefault();
   fullPicture.classList.remove('hidden');
   const photo = picture.querySelector('.picture__img');
   const show = photo.getAttribute('src');


   console.log(show);
   });
 });


closeButton.addEventListener('click', function () {
  fullPicture.classList.add('hidden');
});




