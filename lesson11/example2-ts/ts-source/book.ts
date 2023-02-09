console.log("Hello from book.ts");

const books = document.querySelectorAll(".book h3") as NodeListOf<HTMLElement>;
for(let i = 0; i < books.length; i++) {
    console.log(books[i].innerText);
}

const bookParent = document.querySelector('.book-grid');
if(bookParent != null) {
  const book = document.createElement('div');
  book.classList.add('book');
  book.innerHTML = `          
      <img src="images/tim-alex-1i-P178kxHQ-unsplash.jpg" alt="Book 4 Cover">
      <h3>Book 4</h3>  
      <p>Book 4 author</p>
      <p>Year: 2023</p>
      <p>Price: $22</p>    
  `;
  bookParent.appendChild(book);
}
