const book = {
    // author:'John Doe',
    // title:'A book',
    price:126,
    // chapters:{
    //     first: 'Beginning',
    //     second:'of Something',
    //     third: 'New',
    // }
};
// const author=book.author; // kopie wartosci
// const price=book.price; // kopie wartosci
// const chapters=book.chapters; // kopie referencji!

// author +='!';
// price++;
// chapters.first = 'Nowy rozdział';

const {
    author: personName = 'Kasia',
    price=0,
    chapters= {
        first: 'Default-title'
    } 
} = book;

const { length} =personName;

const showTitle=({title})=>console.log(title);


showTitle(book);

// console.log(book.author);
// console.log(personName);
// console.log(length);
// console.log(book.price);
// console.log(price);
// console.log(book.chapters);
// console.log(chapters);
// console.log(first);





