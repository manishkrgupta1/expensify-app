console.log('destr');

const book={
    title:'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher:{
        //f   name : 'penguin'
    }
}


const {name: publisherName = 'self-published'}=book.publisher;

console.log(publisherName);