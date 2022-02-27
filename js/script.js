'use strict';

const books = document.querySelectorAll('.book');
const bookTitle = document.querySelectorAll('.book h2 a')[4];
const body = document.querySelector('body');
const adv = document.querySelectorAll('.adv');

books[0].before(books[1]);
books[5].after(books[2]);
books[4].after(books[3]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

bookTitle.textContent = 'Книга 3. this и Прототипы Объектов';

adv[0].remove();

console.log(books); 
console.log(bookTitle); 
