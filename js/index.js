"use strict";

/* eslint-disable no-undef */
document.addEventListener("DOMContentLoaded", function () {
  // Слайдер с партнерами
  var projectSwiper = new Swiper(".projects__swiper", {
    slidesPerView: 1.1,
    spaceBetween: 10,
    speed: 300,
    loop: true,
    centeredSlides: false,
    navigation: {
      nextEl: ".projects__next",
      prevEl: ".projects__prev"
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.1,
        spaceBetween: 10
      },
      480: {},
      768: {
        slidesPerView: 1.1,
        spaceBetween: 30
      },
      1280: {
        spaceBetween: 30,
        slidesPerView: 1.5
      }
    }
  });

  function menu() {
    var _document, _document4, _document5;

    var windowEl = window;
    var documentEl = document;
    var htmlEl = document.documentElement;
    var bodyEl = document.body;
    var headerHeight = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('.header').offsetHeight;
    document.querySelector(':root').style.setProperty('--header-height', "".concat(headerHeight, "px"));

    function disableScroll() {
      var _document2;

      var fixBlocks = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelectorAll('.fixed-block');
      var pagePosition = window.scrollY;
      var paddingOffset = "".concat(windowEl.innerWidth - bodyEl.offsetWidth, "px");
      htmlEl.style.scrollBehavior = 'none';
      fixBlocks.forEach(function (el) {
        el.style.paddingRight = paddingOffset;
      });
      bodyEl.style.paddingRight = paddingOffset;
      bodyEl.classList.add('dis-scroll');
      bodyEl.dataset.position = pagePosition;
      bodyEl.style.top = "-".concat(pagePosition, "px");
    }

    function enableScroll() {
      var _document3;

      var fixBlocks = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelectorAll('.fixed-block');
      var body = document.body;
      var pagePosition = parseInt(bodyEl.dataset.position, 10);
      fixBlocks.forEach(function (el) {
        el.style.paddingRight = '0px';
      });
      bodyEl.style.paddingRight = '0px';
      bodyEl.style.top = 'auto';
      bodyEl.classList.remove('dis-scroll');
      window.scroll({
        top: pagePosition,
        left: 0
      });
      bodyEl.removeAttribute('data-position');
      htmlEl.style.scrollBehavior = 'smooth';
    }

    var burger = (_document4 = document) === null || _document4 === void 0 ? void 0 : _document4.querySelector('[data-burger]');
    var menu = (_document5 = document) === null || _document5 === void 0 ? void 0 : _document5.querySelector('[data-menu]');
    burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', function (e) {
      burger === null || burger === void 0 ? void 0 : burger.classList.toggle('burger--active');
      menu === null || menu === void 0 ? void 0 : menu.classList.toggle('menu--active');

      if (menu !== null && menu !== void 0 && menu.classList.contains('menu--active')) {
        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'true');
        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Закрыть меню');
        disableScroll();
      } else {
        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
        enableScroll();
      }
    });
  }

  menu();
});
//# sourceMappingURL=index.js.map
