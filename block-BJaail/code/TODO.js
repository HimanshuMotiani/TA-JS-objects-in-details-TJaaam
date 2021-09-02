// # Creating a book store app using OOP

// You should have the following features in the bookly app:

// - User can add a new book by adding the name, author and url of the image
// - Once added the book will be marked not read
// - You can change the state of the book to `Read` and it will be marked as completed
// - User can delete the book

// ![DEMO](../assets/bookly.png)
class BookList{
    constructor(root,list = []){
    this.root = root
    this.list = list;
    }
    add(bookInfo){
        let boo = new Book(bookInfo.title,bookInfo.author,bookInfo.id);
        this.list.push(boo);
        this.createUI()
        return this.list.length;
    }
    handleDelete(id){
        let index = this.list.findIndex((book) =>{
            return book.id === id
        })
        this.list.splice(index,1);
        this.createUI();
        return this.list.length;
    }
    createUI(){
        this.root.innerHTML = '';
        this.list.forEach((book)=>{
            let ui = book.createUI();
            ui.querySelector("span").
            addEventListener("click",this.handleDelete.bind(this, book.id));
        //     let tr = document.createElement("tr");
        // tr.classList.add("heading")
        // let th1 = document.createElement("th");
        // th1.innerText = "Title"
        // let th2 = document.createElement("th");
        // th2.innerText = "Author"
        // let th3 = document.createElement("th");
        // th3.innerText = "Id"
        // tr.append(th1,th2,th3)
        this.root.append(ui);
        })
    }
}
class Book{
    constructor(title, author, id){
        this.title = title;
        this.author = author;
        this.id = id;
    }
    // <tr class="heading">
    //             <th>Title</th>
    //             <th>Author</th>
    //             <th>ISBN#</th>
    //         </tr>
    createUI(){
        // this.root.innerHTML = '';
        

        let tr = document.createElement("tr");
        tr.classList.add("rows");
        let title= document.createElement("td");
        title.innerText = this.title
        let author = document.createElement("td");
        author.innerText = this.author;
        let id = document.createElement("td");
        id.innerText = this.id;
        let span = document.createElement("span")
        span.classList.add("red");
        span.innerText = "X";
        id.append(span);
        tr.append(title,author,id);
        return tr;
    }
}

let obj = new BookList(document.querySelector(".books"))

let form = document.querySelector("form")
form.addEventListener("submit",handleForm);
bookInfo = {};
function handleForm(event){
event.preventDefault();
bookInfo.title = event.currentTarget[0].value;
bookInfo.author = event.currentTarget[1].value;
bookInfo.id = event.currentTarget[2].value;
obj.add(bookInfo);
bookInfo = {};
event.currentTarget[0].value = '';
event.currentTarget[1].value= '';
event.currentTarget[2].value = '';

}
