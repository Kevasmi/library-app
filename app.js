const main = document.querySelector('main')
const newBook = document.querySelector('.new-book');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.close-btn');
const addBook = document.querySelector('#submit-btn');

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
    console.log(myLibrary)
} 

function closeModal() {
    modalContainer.classList.remove('show');
}

function clearForm() {
    title.value = ''
    author.value = ''
    pages.value = ''
}

function addCard(title, author, pages) {
    const card = document.createElement('div')
    const cardTitle = document.createElement('h2')
    const cardAuthor = document.createElement('h3')
    const cardPages = document.createElement('p')
    const cardRead = document.createElement('p')
    cardTitle.textContent = title
    cardAuthor.textContent = author
    cardPages.textContent = `${pages} pages`
    cardRead.textContent = 'read'
    card.classList.add('card')
    main.appendChild(card)
    card.appendChild(cardTitle)
    card.appendChild(cardAuthor)
    card.appendChild(cardPages)
    card.appendChild(cardRead)
}

addBook.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    addBookToLibrary(title, author, pages);
    closeModal();
    clearForm();
    addCard(title, author, pages);
})


// addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');



// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');

// theHobbit.info();