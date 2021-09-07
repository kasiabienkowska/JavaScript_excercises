// const book = {
    // author:'John Doe',
    // title:'A book',
    // price:126,
    // chapters:{
    //     first: 'Beginning',
    //     second:'of Something',
    //     third: 'New',
    // }
// };
// const author=book.author; // kopie wartosci
// const price=book.price; // kopie wartosci
// const chapters=book.chapters; // kopie referencji!

// author +='!';
// price++;
// chapters.first = 'Nowy rozdział';

// const {
//     author: personName = 'Kasia',
//     price=0,
//     chapters= {
//         first: 'Default-title'
//     } 
// } = book;

// const { length} =personName;

// const showTitle=({title})=>console.log(title);


// showTitle(book);

// console.log(book.author);
// console.log(personName);
// console.log(length);
// console.log(book.price);
// console.log(price);
// console.log(book.chapters);
// console.log(chapters);
// console.log(first);

//Przykład 2

// const obj = {
//     first_name : "Karol",
//     last_name : "Kowalski",
//     age : 10
// }

// const {
//     first_name,
//     last_name,
//     age
// } = obj;

// console.log(first_name);

// const obj = {
//     first_name : "Karol",
//     last_name : "Kowalski"
// }

// const {
//     first_name = "brak",
//     last_name = "brak",
//     favoritePet = "brak"
// } = obj;

// console.log(first_name); //Karol
// console.log(last_name); //Kowalski
// console.log(favoritePet); //"brak"

const obj = {
    first_name : "Karol",
    last_name : "Kowalski",
}

const {
    first_name : name = "brak",
    last_name : surname = "brak",
    favoritePet : pet  = "brak"
} = obj;

console.log(name); //Karol
console.log(surname); //Kowalski
console.log(pet); //"brak"




