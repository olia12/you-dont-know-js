'use strict';

const books = document.querySelectorAll('.book');
console.log(books); 

books[0].before(books[1]);
books[5].after(books[2]);
books[4].after(books[3]);

