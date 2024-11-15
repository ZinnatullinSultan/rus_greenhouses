//Раскрытие бургера
const burger = document.querySelector('.burger');
const menuList = document.querySelector('.menu__item--list');
const submenu = document.querySelector('.submenu');
menuList.addEventListener('click', () => {
  burger.classList.toggle('active');
  submenu.classList.toggle('submenu--hidden');
})

const leftItems = document.querySelectorAll('.submenu__left .submenu__item');
  const rightContentLists = document.querySelectorAll('.submenu__right .submenu__list');

  leftItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      leftItems.forEach(el => el.classList.remove('submenu__item--active'));

      item.classList.add('submenu__item--active');
      const target = item.getAttribute('data-target');
      rightContentLists.forEach(list => {
        list.classList.remove('submenu__list--active');
      });

      const activeList = document.querySelector(`.submenu__right .submenu__list[data-content="${target}"]`);
      if (activeList) {
        activeList.classList.add('submenu__list--active');
      }
    });
  });

//Слайдер1
const slider = document.querySelector('.certificates__track');
const slides = document.querySelectorAll('.certificates__slide');
const prevBtn = document.querySelectorAll('.certificates__btn--prev');
const nextBtn = document.querySelectorAll('.certificates__btn--next');

let currentSlide = 0;
const totalSlides = slides.length;
let visibleSlides = getVisibleSlides(); 

function getVisibleSlides() {
  if (window.innerWidth <= 530) {
    return 1;
  } else if (window.innerWidth <= 800) {
    return 2;
  } else {
    return 4;
  }
}

function updateSliderPosition() {
  const slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(-${currentSlide * (slideWidth+40)}px)`;
}

function updateVisibleSlides() {
  visibleSlides = getVisibleSlides(); 
  currentSlide = Math.min(currentSlide, totalSlides - visibleSlides); 
  updateSliderPosition();
}

nextBtn[0].addEventListener('click', function() {
  if (currentSlide < totalSlides - visibleSlides) {
    currentSlide++;
  } else {
    currentSlide = 0; 
  }
  updateSliderPosition();
});

prevBtn[0].addEventListener('click', function() {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = totalSlides - visibleSlides;
  }
  updateSliderPosition();
});
window.addEventListener('resize', updateVisibleSlides);
//Слайдер2
const slider2 = document.querySelector('.equipment__track');
const slides2 = document.querySelectorAll('.equipment__slide');

let currentSlide2 = 0;
const totalSlides2 = slides2.length;
let visibleSlides2 = getVisibleSlides2(); 

function getVisibleSlides2() {
  if (window.innerWidth <= 530) {
    return 1;
  } else if (window.innerWidth <= 800) {
    return 2;
  } else {
    return 3;
  }
}
function updateSliderPosition2() {
  const slideWidth = slides2[0].clientWidth;
  slider2.style.transform = `translateX(-${currentSlide2 * (slideWidth+10)}px)`;
}
function updateVisibleSlides2() {
  visibleSlides2 = getVisibleSlides2(); 
  currentSlide2 = Math.min(currentSlide2, totalSlides2 - visibleSlides2); 
  updateSliderPosition2();
}
nextBtn[1].addEventListener('click', function() {
  if (currentSlide2 < totalSlides2 - visibleSlides2) {
    currentSlide2++;
  } else {
    currentSlide2 = 0; 
  }
  updateSliderPosition2();
});

prevBtn[1].addEventListener('click', function() {
  if (currentSlide2 > 0) {
    currentSlide2--;
  } else {
    currentSlide2 = totalSlides2 - visibleSlides2;
  }
  updateSliderPosition2();
});
window.addEventListener('resize', updateVisibleSlides2);
//Слайдер3
const slider3 = document.querySelector('.delivery__track');
const slides3 = document.querySelectorAll('.delivery__slide');

let currentSlide3 = 0;
const totalSlides3 = slides3.length;
let visibleSlides3 = getVisibleSlides3(); 

function getVisibleSlides3() {
  if (window.innerWidth <= 530) {
    return 1;
  } else if (window.innerWidth <= 800) {
    return 2;
  } else {
    return 5;
  }
}
function updateSliderPosition3() {
  const slideWidth = slides3[0].clientWidth;
  slider3.style.transform = `translateX(-${currentSlide3 * (slideWidth+40)}px)`;
}
function updateVisibleSlides3() {
  visibleSlides3 = getVisibleSlides3(); 
  currentSlide3 = Math.min(currentSlide3, totalSlides3 - visibleSlides3); 
  updateSliderPosition3();
}
nextBtn[2].addEventListener('click', function() {
  if (currentSlide3 < totalSlides3 - visibleSlides3) {
    currentSlide3++;
  } else {
    currentSlide3 = 0; 
  }
  updateSliderPosition3();
});

prevBtn[2].addEventListener('click', function() {
  if (currentSlide3 > 0) {
    currentSlide3--;
  } else {
    currentSlide3 = totalSlides3 - visibleSlides3;
  }
  updateSliderPosition3();
});
window.addEventListener('resize', updateVisibleSlides3);
//Слайдер4
const sliders4 = document.querySelectorAll('.reviews__item'); // Контейнеры слайдеров
console.log(sliders4);
  sliders4.forEach(slider => {
    const track = slider.querySelector('.reviews__track');
    const slides = slider.querySelectorAll('.reviews__slide');
    const prevBtn = slider.querySelector('.reviews__btn--prev');
    const nextBtn = slider.querySelector('.reviews__btn--next');

    let currentSlide = 0;
    const totalSlides = slides.length;
    let visibleSlides = getVisibleSlides();

    function getVisibleSlides() {
      if (window.innerWidth <= 530) {
        return 1;
      } else if (window.innerWidth <= 800) {
        return 2;
      } else {
        return 1;
      }
    }
    function updateSliderPosition() {
      const slideWidth = slides[0].clientWidth;
      track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
    function updateVisibleSlides() {
      visibleSlides = getVisibleSlides();
      currentSlide = Math.min(currentSlide, totalSlides - visibleSlides);
      updateSliderPosition();
    }

    nextBtn.addEventListener('click', () => {
      if (currentSlide < totalSlides - visibleSlides) {
        currentSlide++;
      } else {
        currentSlide = 0;
      }
      updateSliderPosition();
    });

    prevBtn.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
      } else {
        currentSlide = totalSlides - visibleSlides; // Переходим в конец
      }
      updateSliderPosition();
    });
    window.addEventListener('resize', updateVisibleSlides);
    updateSliderPosition();
  });

// Выбор длины
const itemLeaders = document.querySelectorAll('.item-leaders');

  itemLeaders.forEach(item => {
    const buttons = item.querySelectorAll('.item-leaders__variation');
    const oldPriceEl = item.querySelector('.item-leaders__old-price');
    const newPriceEl = item.querySelector('.item-leaders__new-price');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Убираем активный класс у всех кнопок в текущем блоке
        buttons.forEach(btn => btn.classList.remove('item-leaders__variation--active'));

        // Добавляем активный класс нажатой кнопке
        button.classList.add('item-leaders__variation--active');

        // Обновляем цены в текущем блоке
        const oldPrice = button.getAttribute('data-price-old');
        const newPrice = button.getAttribute('data-price-new');
        oldPriceEl.textContent = `от ${parseInt(oldPrice).toLocaleString()} руб.`;
        newPriceEl.textContent = `от ${parseInt(newPrice).toLocaleString()} руб.`;
      });
    });
  });
  //Слайдер в товарах
  const sliders = document.querySelectorAll('.item-leaders');

  sliders.forEach(slider => {
    const sliderWrapper = slider.querySelector('.slider-wrapper');
    const slides = slider.querySelectorAll('.slider-slide');
    const dots = slider.querySelectorAll('.pagination-dot');
    let currentIndex = 0;

    function showSlide(index) {
      const offset = -index * 100;
      sliderWrapper.style.transform = `translateX(${offset}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }

    // Обработка кликов по точкам
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'), 10);
        currentIndex = index;
        showSlide(currentIndex);
      });
    });

    // Добавляем свайпы
    let startX = 0;
    let endX = 0;

    sliderWrapper.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    });

    sliderWrapper.addEventListener('touchend', e => {
      endX = e.changedTouches[0].clientX;

      if (startX - endX > 50) {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      } else if (endX - startX > 50) {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
      }
    });
    showSlide(currentIndex);
  });

//Показать ещё
const leadersBtn = document.querySelector('.leaders__btn');
const hiddenItems = document.querySelectorAll('.item-leaders--hidden');
leadersBtn.addEventListener('click', () => {
  hiddenItems.forEach(item => {
    item.classList.toggle('item-leaders--hidden');
  })
  leadersBtn.textContent = leadersBtn.textContent === 'ПОКАЗАТЬ ЕЩË' ? 'СКРЫТЬ' : 'ПОКАЗАТЬ ЕЩË';
})