// function for load book data
function loadBook() {
    const searchInput = document.getElementById("searchInput");
    const searchInputValue = searchInput.value;
    const bookUrl = `https://openlibrary.org/search.json?q=${searchInputValue}`
    // fetching api
    fetch(bookUrl)
        .then(res => res.json())
        .then(books => showBook(books))
    searchInput.value = '';

}
// function for showing data on web
const showBook = books => {
    // creating if else for error handling
    if (books.docs.length === 0) {
        const resultCount = document.getElementById("resultCount");
        resultCount.innerText = `Total ${books.numFound} result found`;
    } else {
        const booksArray = books.docs;
        const bookGroup = document.getElementById("bookGroup")
        booksArray.forEach(book => {
            // create imgUrl
            const imgUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            // creating variable for title-author-publisher
            const bookTitle = book.title;
            const authorName = book.author_name[0];
            const publishYear = book.first_publish_year;
            const publisher = book.publisher[0];
            // updating web
            const div = document.createElement("div");
            div.classList.add("col");
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
    //   showing total result on web
            bookGroup.appendChild(div);
            const resultCount = document.getElementById("resultCount");
            resultCount.innerText = `Total ${books.numFound} result found and showing top 100 results`;
        });
    }

}