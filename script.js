const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return (
      this.title +
      " by " +
      this.author +
      ", " +
      this.pages +
      " pages, " +
      this.read
    );
  };
}

function addBookToLibrary(title, author, pages, read) {
  let book22 = new Book(title, author, pages, read);
  myLibrary.push(book22);
  displaybook();
}

const book1 = new Book("Diary of a wimpy Kid", "Count Olaf", 100, "read");
console.log(book1.info());

addBookToLibrary("ashu", "liya", 23, true);
addBookToLibrary("2 states", "chetan bhagat", 260, false);

console.log(myLibrary);

function displaybook() {
  const booklist = document.querySelector(".section4");
  booklist.innerHTML = "";
  const headerRow = document.createElement("tr");
  const headers = ["Title", "Author", "Pages", "Read"];
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  booklist.appendChild(headerRow);

  for (let book in myLibrary) {
    const bookrow = document.createElement("tr");

    let thisbook = myLibrary[book];

    const title = document.createElement("td");
    title.innerHTML = thisbook.title;
    bookrow.appendChild(title);

    const author = document.createElement("td");
    author.innerHTML = thisbook.author;
    bookrow.appendChild(author);

    const pages = document.createElement("td");
    pages.innerHTML = thisbook.pages;
    bookrow.appendChild(pages);

    const read = document.createElement("td");
    if (thisbook.read == true) {
      read.innerHTML = "Yes";
    } else {
      read.innerHTML = "No";
    }
    bookrow.appendChild(read);

    booklist.appendChild(bookrow);
  }
}

let bookForm = document.querySelector(".bookform");

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value);
  const read = document.getElementById("read").checked;
  addBookToLibrary(title, author, pages, read);
  displaybook();
});
