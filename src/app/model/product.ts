export class Product { 
 
    constructor(productID:number,    name: string ,   price:number, desc : string) {
        this.productID=productID;
        this.name=name;
        this.price=price;
        this.Desc=desc;
        
    }
 
    productID:number ;
    name: string ;
    price:number;
    Desc : string;
 
}
 