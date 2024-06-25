function initializeFormDisplay() {
  const modal = document.getElementById("formForAddBook");
  const btn = document.getElementById("openModalBtn");
  const span = document.getElementsByClassName("close")[0];
  const submitBtn = document.getElementById("submitBtn");

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  submitBtn.onclick = function () {
    if (!isFormEmpty()) {
      addBookToList();
      modal.style.display = "none";
    }
  };
}

function addBookToList() {
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const pages = document.getElementById("bookPages").value;
  const isRead = document.getElementById("bookRead").checked;
  const bookImageUrl = document.getElementById("bookImageUrl").value;

  const bookList = document.getElementById("bookList");

  const div = document.createElement("div");
  div.className = "book-item";

  const img = document.createElement("img");
  img.src =
    bookImageUrl ||
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.postermywall.com%2Findex.php%2Fart%2Ftemplate%2Fc0aa3907896e0129750f7475ee200582%2Fsimple-book-cover-template-design&psig=AOvVaw2rC7BHdyKQX5ZE9jqhNZsi&ust=1719354144110000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjew7-j9YYDFQAAAAAdAAAAABAE";
  img.alt = `${title} cover`;

  const bookDetails = document.createElement("div");
  bookDetails.className = "book-details";
  bookDetails.innerHTML = `
    <h3>${title}</h3>
    <p>by ${author}</p>
    <p class="pages">${pages} pages</p>
    <p class="read-status ${isRead ? "read" : "unread"}">${
    isRead ? "Read" : "Unread"
  }</p>
  `;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    div.remove();
  };

  div.appendChild(img);
  div.appendChild(bookDetails);
  div.appendChild(deleteBtn);
  bookList.appendChild(div);

  clearFormFields();
}

function clearFormFields() {
  document.getElementById("bookTitle").value = "";
  document.getElementById("bookAuthor").value = "";
  document.getElementById("bookPages").value = "";
  document.getElementById("bookRead").checked = false;
  document.getElementById("bookImageUrl").value = "";
}

function isFormEmpty() {
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const pages = document.getElementById("bookPages").value;

  if (title === "" || author === "" || pages === "") {
    alert("Please fill in all fields");
    return true;
  }
  return false;
}

initializeFormDisplay();
