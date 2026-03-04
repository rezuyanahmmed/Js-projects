function newPrice(currentPrice, discount) {

    if (typeof currentPrice !== "number" || typeof discount !== "number") {
        return "Invalid";
    }
    if (discount < 0 || discount > 100) {
        return "Invalid";
    }
    let discountAmount = (currentPrice * discount) / 100;
 
    let finalPrice = currentPrice - discountAmount;   
    return finalPrice.toFixed(3);
}



console.log(newPrice(2000, 20));     
console.log(newPrice(2000, 15));     
console.log(newPrice(1200, 7));      
console.log(newPrice("1000", 10));   
console.log(newPrice(2000, 17.17));  
console.log(newPrice(500, "5"));     
