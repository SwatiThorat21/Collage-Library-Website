console.log('this is index.js');

// Contructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor

// function display() {

// }

// Add methods to display prototype

// Add submit event listener to libraryForm

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener("submit", libraryFormSub);

function libraryFormSub(e) {
    console.log('You have submitted library form');
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    };

    let book = new Book(name, author, type);

   e.preventDefault();
   console.log(book);
} 