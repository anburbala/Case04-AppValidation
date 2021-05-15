export interface Product { 
  // productId: string  
  name: string;
  desc: string;
  price: string;
  productAvailable : string;
}

export interface Products{
  products: Array<Product>
}
 