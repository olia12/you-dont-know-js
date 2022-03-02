'use strict';

const books = document.querySelectorAll('.book');
const bookTitle = document.querySelectorAll('.book h2 a')[4];
const body = document.querySelector('body');
const adv = document.querySelectorAll('.adv');
const bookOrder = document.querySelectorAll('.book ul li');

books[0].before(books[1]);
books[5].after(books[2]);
books[4].after(books[3]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

bookTitle.textContent = 'Книга 3. this и Прототипы Объектов';

adv[0].remove();

bookOrder[3].after(bookOrder[6]);
bookOrder[6].after(bookOrder[8]);
bookOrder[10].before(bookOrder[2]);

bookOrder[48].before(bookOrder[55]);
bookOrder[55].after(bookOrder[49]);
bookOrder[50].after(bookOrder[48]);
bookOrder[53].after(bookOrder[51]);

const chapter = document.createElement('li');
chapter.textContent = 'Глава 8: За пределами ES6';
bookOrder[25].append(chapter);

console.log(books); 
console.log(bookTitle); 
console.log(bookOrder); 
