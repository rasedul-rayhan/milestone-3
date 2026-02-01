/*
    ### 3. Checking Array Membership with ‘includes’

    **Instructions:**

    1. Create an array of books containing different book.

    2. Use the includes method to check if the array contains a javascript book.

    3. Print a message to the console indicating whether the element is present in the array or not.

*/

let books = ['bangla', 'math', 'english', 'sociology'];

let bookName = 'math'
if(books.includes(bookName)){
    console.log(`${bookName} book has in book list`);
}
else{
    console.log(`${bookName} this book have not in list`);
}

