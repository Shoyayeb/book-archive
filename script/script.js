function loadBook() {
    const searchInput = document.getElementById("searchInput");
    const searchInputValue = searchInput.value;
    const bookUrl = `https://openlibrary.org/search.json?q=${searchInputValue}`
    console.log(bookUrl);
    // fetching api
    fetch(bookUrl)
        .then(res => res.json())
        .then(books => showBook(books))
    searchInput.value = '';
}

const showBook = books => {
    console.log(books);
    const booksArray = books.docs;
    const bookGroup = document.getElementById("bookGroup")
    booksArray.forEach(book => {
        // create imgUrl
        // console.log(book);
        const imgUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        const bookTitle = book.title;
        const div = document.createElement("div");
        div.classList.add("col");
        const authorName = book.author_name[0];
        const publishYear = book.first_publish_year;
        const publisher = book.publisher[0];
        div.innerHTML = `
            <div class="card h-100">
                <img src="${imgUrl}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${bookTitle}</h5>
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Author:</strong> ${authorName}</li>
                <li class="list-group-item"><strong>First Published:</strong> ${publishYear}</li>
                <li class="list-group-item"><strong>Publisher:</strong> ${publisher}</li>
                </ul>
                </div>
            </div>
      `
        bookGroup.appendChild(div);
        const resultCount = document.getElementById("resultCount");
        resultCount.innerText = `Total ${books.numFound} result found and showing top 100 results`;
    });
}