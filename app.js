const newBook = document.querySelector('.new-book');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.close-btn');

newBook.addEventListener('click', () => {
    modalContainer.classList.add('show');
})

closeBtn.addEventListener('click', () => {
    modalContainer.classList.remove('show');
})

let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this.read = read;
    this.info = function() {
        console.log(`"${title} ` + 'by ' + `${author}, ` + `${pages} pages.`);
    }
}

function addBookToLibrary(title, author, pages) {
    let newBook = new Book(title, author, pages)
    myLibrary.push(newBook);
}

// addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');



// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');

// theHobbit.info();