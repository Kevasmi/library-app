let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(`"${title} ` + 'by ' + `${author}, ` + `${pages} pages, ` + `${read}"`);
    }
}

function addBookToLibrary() {
    
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');

theHobbit.info();