let book1 = {
  bookName: "Wicked",
  authorName: "GregoryMaguirei",
  year: "2004",
};
let book2 = {
  bookName: "Courting Greta",
  authorName: "Ramsey Hootman",
  year: "2013",
};
let bookUtils = {
  // 1
  getFirstPublished(book1, book2) {
    return book2.year > book1.year ? book1 : book2;
  },
  //   2
  setNewEdition(book1, newyear) {
    book1.year = newyear;
    return book1;
  },
  //   3
  setLanguage(book1, newLanguage) {
    book1.Language = newLanguage;
    return book1;
  },
  //   4
  setTranslation(book1, translator, Language) {
    book1.Translation = { Language, translator };
    return book1;
  },
  //   5
  setPublisher(book1, name, location) {
    book1.Publisher = { name, location };
    return book1;
  },
  //   6
  isSamePublisher(book1, book2) {
    return book1.bookName === book1.bookName && book1.year === book2.year
      ? true
      : false;
  },
};
// 1
console.log(bookUtils.getFirstPublished(book1, book2));
// 2
console.log(bookUtils.setNewEdition(book1, 2022));
// 3
console.log(bookUtils.setLanguage(book1, `english`));
// 4
console.log(bookUtils.setTranslation(book1, `joe`, `english`));
// 5
console.log(bookUtils.setPublisher(book1, `siri`, `america`));
// 6
console.log(bookUtils.isSamePublisher(book1, book2));
