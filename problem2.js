function Author(_name, _birthYear, _nationality) {
    this.name = _name;
    this.birthYear = _birthYear;
    this.nationality = _nationality
}

function Book(_title, _author, _genre, _price) {
    this.title = _title;
    this.author = _author;
    this.genre = _genre;
    this.price = _price;
}

Book.prototype.getBookInfo  =  function(){
    console.log("---------------------------------------------");
    console.log("Book Name  :" , this.title);
    console.log("Books Author  :" , this.author.name);
    console.log("Books genre  :" , this.genre);
    console.log("Price  :" , this.price);
    console.log("---------------------------------------------");
}


const Author1 = new Author("aniket kangane" , '2000' , "indian");

const book1 = new Book("my first flight" , Author1, "xyz" , 1200)

book1.getBookInfo()