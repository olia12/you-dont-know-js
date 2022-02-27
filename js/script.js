'use strict';

const books = document.querySelectorAll('.book');
const body = document.querySelector('body');

books[0].before(books[1]);
books[5].after(books[2]);
books[4].after(books[3]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

console.log(books); 
