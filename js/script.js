'use strict';

const books = document.querySelectorAll('.book');
const bookTitle = document.querySelectorAll('.book h2 a')[4];
const body = document.querySelector('body');
const adv = document.querySelectorAll('.adv');
const book2Order = document.querySelectorAll('.book ul li');

books[0].before(books[1]);
books[5].after(books[2]);
books[4].after(books[3]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

bookTitle.textContent = 'Книга 3. this и Прототипы Объектов';

adv[0].remove();

book2Order[3].after(book2Order[6]);
book2Order[6].after(book2Order[8]);
book2Order[10].before(book2Order[2]);

book2Order[48].before(book2Order[55]);
book2Order[55].after(book2Order[49]);
book2Order[50].after(book2Order[48]);
book2Order[53].after(book2Order[51]);

console.log(books); 
console.log(bookTitle); 
console.log(book2Order); 
