const main = document.querySelector('main');

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
// const img3 = document.getElementById('img3');
// const img4 = document.getElementById('img4');
const imgWrappers = [...document.querySelectorAll('.img-wrapper')];

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const baseImgPath = './img/guests/';

if (+id && !isNaN(+id) && (+id <= 52) && (+id > 0)) { 
  // img1.src = baseImgPath + `1_${id}.jpg`;
  img2.src = baseImgPath + `2_${id}.jpg`;
  // img3.src = baseImgPath + '3.jpg';
  // img4.src = baseImgPath + '4.jpg';
}
else {
  img2.src = `./img/2.jpg`;
}

const imgs = [...document.querySelectorAll('.img-wrapper img')];

imgWrappers.forEach((imgWrapper) => {
  if (!imgWrapper.querySelector('img').src.includes('img')) {
    imgWrapper.style.display = 'none';
  }
});

imgW = 722;
imgH = 1299;

function changeSizeWindow() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (width < height) {
    const ratio = width / imgW;
    main.style.width = imgW * ratio + 'px';

    imgWrappers.forEach(function (imgWrapper) {
      imgWrapper.style.height = height + 'px';
    });
  } else {
    const ratio = height / imgH;
    main.style.width = imgW * ratio + 'px';

    imgWrappers.forEach(function (imgWrapper) {
      imgWrapper.style.height = height + 'px';
    });
  }
}

changeSizeWindow();
