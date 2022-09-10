console.log('this is index.js');

// Contructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor

function Display() {

}

// Add methods to display prototype
Display.prototype.add = function (book) {
    console.log('Adding');
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
    // book.preventDefault();
}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true;
    }
}
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message: </strong> ${displayMessage}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ""
    }, 5000);
}

// Add submit event listener to libraryForm

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener("submit", libraryFormSub);


function libraryFormSub(e) {
    e.preventDefault();
    console.log('You have submitted library form');
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
l
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
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'your book has been sucessfully added')
    }
    else {
        display.show('danger', 'Sorry you can not add this book');
    }

    let bookDetails = {
        name: name,
        author: author,
        type: type
    }


    if (localStorage.getItem('Book') == null) {
        localStorage.setItem('Book', '[]');
    }

    let old_bookList = JSON.parse(localStorage.getItem('Book'));
    old_bookList.push(bookDetails);

    localStorage.setItem('Book', JSON.stringify(old_bookList));

    }

    let savedBooks = window.localStorage.getItem('Book');

    if(savedBooks){
    JSON.parse(savedBooks).forEach(savedBook => {
        
        if (savedBook){

                   
        let book = new Book(savedBook.name, savedBook.author, savedBook.type);
                
            let display = new Display();
        
            if (display.validate(book)) {
        
                display.add(book);
                display.clear();
                display.show('success', 'your book has been sucessfully added')
            }
        }
        

    });
    }




