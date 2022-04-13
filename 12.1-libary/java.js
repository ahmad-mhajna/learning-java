const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
function books(array) {
  let readableBooks = [];
  array.forEach(function (book) {
    if (book.readingStatus === true)
      readableBooks.push(
        `The book ${book.title} was written by ${book.author} available`
      );
  });
  console.log(readableBooks);
}
books(library);
