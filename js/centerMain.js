const navbarHeight = document.querySelector('nav').offsetHeight;
const footerHeight = document.querySelector('footer').offsetHeight;
const mainDom = document.querySelector('.main');
mainDom.style.minHeight = `calc(100vh - (${navbarHeight}px + ${footerHeight}px))`