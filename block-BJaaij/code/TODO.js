// ## An object-oriented book-list!

// - [ ] Create a class BookList
// - [ ] Create another class called Book

// #### Each Book should have several properties:

// 1. Title
// 2. Category
// 3. Author
// 4. isRead (default to `false`)
// 5. finishedDate

// Book class will have the following methods:

// - `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

// #### BookList should have the following properties:

// 1. An array of all the Books
// 2. Current read book index

// #### BookList Methods

// - [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
// - [] `getCurrentBook()` should return the current book using the `index` and the book array
// - [] `getNextBook()` should return the next book using the `index` and the book array
// - [] `getPrevBook()` should return the previous book using the `index` and the book array
// - [] `changeCurrentBook` should accept one parameter and update the current index.

// After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.

class Book {
    constructor(title, category, author, isRead = false, finishedDate) {
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = isRead;
        this.finishedDate = finishedDate;
    }
    markBookAsRead(){
        this.isRead = true;
        this.finishedDate = Date.now()
    }
}
class BookList extends Book{
    constructor(title, category, author, isRead = false, finishedDate,booksArr,bookIndex){
        super(title, category, author, isRead = false, finishedDate)
        this.booksArr = booksArr;
        this.bookIndex = bookIndex;
    }
    add(bookList){
        bookList.forEach(book =>{
            this.booksArr.push(book);
        })
        return this.booksArr;   
    }
    getCurrentBook(){
        return this.booksArr[this.bookIndex]
    }
    getNextBook(){
        return this.booksArr[this.bookIndex + 1]
    }
    getPrevBook(){
        return this.booksArr[this.bookIndex - 1]
    }
    changeCurrentBook(index){
        this.bookIndex = index;
    }
}
let book1 = new BookList("test1","thriller","JK",false,Date.now,["a","b","c"],1)
let book2 = new BookList("test2","action","JK",false,Date.now,["d","e","f"],2)
let book3 = new BookList("test3","love","JK",false,Date.now,["g","h","i"],1)
let book4 = new BookList("test4","cartoon","JK",false,Date.now,["j","k","l"],2)
let book5 = new BookList("test5","bollywood","JK",false,Date.now,["m","n","o"],0)
 