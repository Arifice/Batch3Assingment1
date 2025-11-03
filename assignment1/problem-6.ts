{
  // Type alias for Book
type Book = {
  title: string;
  author: string;
  publishedYear: number;
};

// Function to check if the book is recent
function isRecentBook(book: Book): boolean {
  const currentYear = new Date().getFullYear();
  return (currentYear - book.publishedYear) <= 5;
}

// Sample Input
const book1: Book = {
  title: "Sample Book",
  author: "John Doe",
  publishedYear: 2022
};

// Output
console.log(isRecentBook(book1)); // true
}