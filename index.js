class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`product: ${this.name}`);
        console.log(`price: ${this.price.toFixed(2)}`);
    }

    calculatetotal(tax){
        return this.price + (this.price * tax)
    }
}



const product1 = new Product('playstation 5', 599.99)
const product2 = new Product('gaystation 5', 29.99)
const product3 = new Product('gimball', 199.99)

product1.displayProduct();
const total1 = product1.calculatetotal(0.44);
product2.displayProduct();
const total2 = product2.calculatetotal(0.44);
console.log("")

console.log(`total price for these products (tax each): $${(total1 + total2).toFixed(2)}`)