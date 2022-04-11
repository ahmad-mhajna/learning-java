let book = {
  bookName: "Wicked",
  authorName: "GregoryMaguirei",
  yearPublished: "2004",
  publisher: "Hardcover",
};
function bookDetails(book) {
  console.log(
    `The book ${book.bookName} was written by ${book.authorName} in the year ${book.yearPublished} and was published by ${book.publisher}`
  );
}
bookDetails(book);
