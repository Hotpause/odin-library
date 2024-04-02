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
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displaybook();
}

const book1 = new Book("Diary of a wimpy Kid", "Count Olaf", 100, "read");
console.log(book1.info());

addBookToLibrary("Diary of a wimpy Kid", "Jeff Kinney", 100, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 324, false);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 214, true);
addBookToLibrary(
  "Harry Potter and the Philosopher's Stone",
  "J.K. Rowling",
  336,
  true
);

console.log(myLibrary);

function displaybook() {
  const booklist = document.querySelector(".section4");
  booklist.innerHTML = "";
  const headerRow = document.createElement("tr");
  const headers = ["Title", "Author", "Pages", "Read", "Delete"];
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  booklist.appendChild(headerRow);

  myLibrary.forEach((thisbook, index) => {
    const bookrow = document.createElement("tr");

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
    const readButton = document.createElement("button");
    readButton.textContent = thisbook.read ? "Yes" : "No";
    readButton.classList.add("read-button");
    readButton.addEventListener("click", () => {
      thisbook.read = !thisbook.read; // Toggle the read status
      readButton.textContent = thisbook.read ? "Yes" : "No";
    });
    read.appendChild(readButton);
    bookrow.appendChild(read);

    const action = document.createElement("td");
    const deletebutton = document.createElement("button");
    deletebutton.innerHTML = "delete";
    deletebutton.classList.add("delete-button");
    deletebutton.addEventListener("click", () => {
      deletebook(index);
    });

    action.appendChild(deletebutton);
    bookrow.appendChild(action);

    booklist.appendChild(bookrow);
  });
}

function deletebook(index) {
  myLibrary.splice(index, 1);
  displaybook();
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
