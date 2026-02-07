/*function signature/sample */

function newPrice(currentPrice, discount) {
    if(typeof currentPrice !== 'string' && typeof discount !== 'string'){
        const discount_amount = (currentPrice * discount)/ 100;
        const discountPrice = currentPrice - discount_amount;
        return discountPrice.toFixed(3);
    }
    else{
        return 'Invalid';
    }
}

console.log(newPrice(1500, 20));

console.log(newPrice(2000, 15));

console.log(newPrice(1200, 7));

console.log(newPrice("1000", 10));

console.log(newPrice(2000, 17.17));

console.log(newPrice(500, "5"));