
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.nav__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('nav__list--active')
    menu.style.display = "flex"
})

var modal1 = document.getElementById("myModal1");
var openModalImg1 = document.getElementById("openModalImg1");

var modal2 = document.getElementById("myModal2");
var openModalImg2 = document.getElementById("openModalImg2");

var modal3 = document.getElementById("myModal3");
var openModalImg3 = document.getElementById("openModalImg3");

var modal4 = document.getElementById("myModal4");
var openModalImg4 = document.getElementById("openModalImg4");

// Відкриваємо перше модальне вікно, коли натиснули на зображення
openModalImg1.onclick = function () {
    modal1.style.display = "block";
    document.body.classList.add("modal-open"); // Вимкнути скроллінг панелі
    document.body.style.overflow = 'hidden'; // Вимкнення прокрутки
};

// Закрити перше модальне вікно, коли натиснули на кнопку закриття
function closeModal1() {
    modal1.style.display = "none";
    document.body.classList.remove("modal-open"); // Увімкнути скроллінг панелі
    document.body.style.overflow = ''; // Відновлення прокрутки
}

// Закрити перше модальне вікно, якщо користувач клацне поза ним
window.onclick = function (event) {
    if (event.target === modal1) {
        closeModal1();
    }
};

// Керувати зміною зображення на основі вибраного елемента списку для першого модального вікна
let elementBlockItems1 = document.querySelectorAll(".element__block-item-give");
elementBlockItems1.forEach(function (item) {
    item.addEventListener("click", function () {
        item.preventDefault()
        // Отримати елемент зображення
        let imageElement = item.querySelector(".element__block-calc-give-img");

        // Перевірити, чи елемент зображення існує перед отриманням src
        if (imageElement) {
            // Отримати джерело зображення та оновіть openModalImg1
            let imgSrc = imageElement.src;
            openModalImg1.src = imgSrc;
        }

        // Закрити перше модальне вікно після вибору елемента
        closeModal1();
    });
});

// Відкриваємо друге модальне вікно, коли натиснули на зображення
openModalImg2.onclick = function () {
    modal2.style.display = "block";
    document.body.classList.add("modal-open"); // Вимкнути скроллінг панелі
    document.body.style.overflow = 'hidden'; // Вимкнення прокрутки
};

// Закрити друге модальне вікно, коли натиснули на кнопку закриття
function closeModal2() {
    modal2.style.display = "none";
    document.body.classList.remove("modal-open"); // Увімкнути скроллінг панелі
    document.body.style.overflow = ''; // Відновлення прокрутки
}

// Закрити друге модальне вікно, якщо користувач клацне поза ним
window.onclick = function (event) {
    if (event.target === modal2) {
        closeModal2();
    }
};

// Керувати зміною зображення на основі вибраного елемента списку для другого модального вікна
let elementBlockItems2 = document.querySelectorAll(".element__block-item-get");
elementBlockItems2.forEach(function (item) {
    item.addEventListener("click", function () {
        item.preventDefault()
        // Отримати елемент зображення
        let imageElement = item.querySelector(".element__block-calc-get-img");

        // Перевірити, чи елемент зображення існує перед отриманням src
        if (imageElement) {
            // Отримати джерело зображення та оновіть openModalImg1
            let imgSrc = imageElement.src;
            openModalImg2.src = imgSrc;
        }

        // Закрити перше модальне вікно після вибору елемента
        closeModal2();
    });
});


// Відкриваємо перше модальне вікно, коли натиснули на зображення
openModalImg3.onclick = function () {
    modal3.style.display = "block";
    document.body.classList.add("modal-open"); // Вимкнути скроллінг панелі
    document.body.style.overflow = 'hidden'; // Вимкнення прокрутки
};

// Закрити перше модальне вікно, коли натиснули на кнопку закриття
function closeModal3() {
    modal3.style.display = "none";
    document.body.classList.remove("modal-open"); // Увімкнути скроллінг панелі
    document.body.style.overflow = ''; // Відновлення прокрутки
}

// Закрити перше модальне вікно, якщо користувач клацне поза ним
window.onclick = function (event) {
    if (event.target === modal3) {
        closeModal3();
    }
};

// Керувати зміною зображення на основі вибраного елемента списку для першого модального вікна
let elementBlockItems3 = document.querySelectorAll(".element__block-item-give");
elementBlockItems3.forEach(function (item) {
    item.addEventListener("click", function () {
        item.preventDefault()
        // Отримати елемент зображення
        let imageElement = item.querySelector(".element__block-calc-give-img");

        // Перевірити, чи елемент зображення існує перед отриманням src
        if (imageElement) {
            // Отримати джерело зображення та оновіть openModalImg1
            let imgSrc = imageElement.src;
            openModalImg1.src = imgSrc;
        }

        // Закрити перше модальне вікно після вибору елемента
        closeModal3();
    });
});

// Відкриваємо перше модальне вікно, коли натиснули на зображення
openModalImg4.onclick = function () {
    modal4.style.display = "block";
    document.body.classList.add("modal-open"); // Вимкнути скроллінг панелі
    document.body.style.overflow = 'hidden'; // Вимкнення прокрутки
};

// Закрити перше модальне вікно, коли натиснули на кнопку закриття
function closeModal4() {
    modal4.style.display = "none";
    document.body.classList.remove("modal-open"); // Увімкнути скроллінг панелі
    document.body.style.overflow = ''; // Відновлення прокрутки
}

// Закрити перше модальне вікно, якщо користувач клацне поза ним
window.onclick = function (event) {
    if (event.target === modal4) {
        closeModal4();
    }
};

// Керувати зміною зображення на основі вибраного елемента списку для першого модального вікна
let elementBlockItems4 = document.querySelectorAll(".element__block-item-give");
elementBlockItems4.forEach(function (item) {
    item.addEventListener("click", function () {
        item.preventDefault()
        // Отримати елемент зображення
        let imageElement = item.querySelector(".element__block-calc-give-img");

        // Перевірити, чи елемент зображення існує перед отриманням src
        if (imageElement) {
            // Отримати джерело зображення та оновіть openModalImg1
            let imgSrc = imageElement.src;
            openModalImg1.src = imgSrc;
        }

        // Закрити перше модальне вікно після вибору елемента
        closeModal4();
    });
});
// Отримуємо всі елементи з класом "tab a"
var tabLinks = document.querySelectorAll('.element__table a');

// Отримуємо елемент за його id
var elementTabs2 = document.getElementById('element-tabs2');

// Застосовуємо стиль, щоб зробити елемент невидимимим
elementTabs2.style.display = 'none';

// Ітеруємося по кожному елементу
tabLinks.forEach(function(tabLink) {
  // Додаємо обробник події для кожного кліку
  tabLink.addEventListener('click', function(e) {
    // Спиняємо стандартну дію переходу за посиланням
    e.preventDefault();

    // Додаємо клас "active" для батьківського елемента
    this.parentNode.classList.add('active');

    // Видаляємо клас "active" для всіх сусідів батьківського елемента
    var siblings = getSiblings(this.parentNode);
    siblings.forEach(function(sibling) {
      sibling.classList.remove('active');
    });

    // Отримуємо значення атрибута "href" та використовуємо його як селектор
    var target = this.getAttribute('href');

    // Сховати всі div у ".element__main", крім того, який вказаний в атрибуті "href"
    var tabContents = document.querySelectorAll('.element__main > div');
    tabContents.forEach(function(tabContent) {
      if ('#' + tabContent.id === target) {
        tabContent.style.display = 'block';
      } else {
        tabContent.style.display = 'none';
      }
    });

    // Показати або приховати елемент з id="element-tabs2" в залежності від умови
    if (target === '#element-tabs2') {
      elementTabs2.style.display = 'block';
    } else {
      elementTabs2.style.display = 'none';
    }
  });
});

// Допоміжна функція для отримання всіх сусідів елемента, крім самого елемента
function getSiblings(element) {
  var siblings = [];
  var sibling = element.parentNode.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== element) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }

  return siblings;
}

