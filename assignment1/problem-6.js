{
    // Function to check if the book is recent
    function isRecentBook(book) {
        var currentYear = new Date().getFullYear();
        return (currentYear - book.publishedYear) <= 5;
    }
    // Sample Input
    var book1 = {
        title: "Sample Book",
        author: "John Doe",
        publishedYear: 2022
    };
    // Output
    console.log(isRecentBook(book1)); // true
}
