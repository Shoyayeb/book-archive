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
function showBook(books) {
    console.log(books);
}