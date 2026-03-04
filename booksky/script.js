// Selecting elements
var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".popup");
var openPopupBtn = document.getElementById("add-popup-button");
var cancelButton = document.querySelector(".cancel-btn");
var addBookBtn = document.getElementById("add-book");

var container = document.querySelector(".container");

var book_title = document.getElementById("book-title");
var book_author = document.getElementById("book-author");
var book_description = document.getElementById("book-description");


// OPEN POPUP
openPopupBtn.addEventListener("click", function(){
    overlay.style.display = "block";
    popup.style.display = "block";
});


// CLOSE POPUP
cancelButton.addEventListener("click", function(){
    overlay.style.display = "none";
    popup.style.display = "none";
});


// ADD BOOK FUNCTION
addBookBtn.addEventListener("click", function(){

    var div = document.createElement("div");
    div.setAttribute("class", "book_container");
  

    div.innerHTML =
        "<h2>" + book_title.value + "</h2>" +
        "<h5>" + book_author.value + "</h5>" +
        "<p>" + book_description.value + "</p>" +
        "<button onclick='this.parentElement.remove()'>Delete</button>";

    container.appendChild(div);

    // Clear input fields
    book_title.value = "";
    book_author.value = "";
    book_description.value = "";

    // Close popup
    overlay.style.display = "none";
    popup.style.display = "none";
});