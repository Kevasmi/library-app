const main = document.querySelector('main')
const newBook = document.querySelector('.new-book');
const modalContainer = document.querySelector('.modal-container');
const modalCloseBtn = document.querySelector('.close-btn');
const removeBtn = document.querySelector('.remove-btn');
const addBook = document.querySelector('#submit-btn');
const readPara = document.querySelector('#read-para');

let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
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
    const removeBtn = document.createElement('button')
    cardTitle.textContent = title
    cardAuthor.textContent = author
    cardPages.textContent = `${pages} pages`
    cardRead.textContent = 'Read'
    removeBtn.innerHTML = `&times`
    card.classList.add('card')
    removeBtn.classList.add('remove-btn')
    removeBtn.setAttribute('onclick','return this.parentNode.remove();')
    main.appendChild(card)
    card.appendChild(removeBtn)
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

newBook.addEventListener('click', () => {
    modalContainer.classList.add('show');
})

modalCloseBtn.addEventListener('click', () => {
    modalContainer.classList.remove('show');
})

readPara.addEventListener('click', (e) => {
    if (readPara.className === 'light-red-background') {
        readPara.className = 'light-green-background'
    } else {
        readPara.className = 'light-red-background'
    }
})