import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class CartService {

 /*  constructor(private http: HttpClient,
    private router: Router
    ) { }


  getCartProductIds(email: string): Observable<any> {  
    let url: string = "http://localhost:8888/CartProductIds/"+email; 
    return this.http.get(url); 
 }
 getCartProducts(parameters: string): Observable<any> {
   let url: string = "http://localhost:8888/CartProducts/"+parameters;
   return this.http.get(url);
  } */

  items = [];

  addToCart(produit) {
    this.items.push(produit);
  }

  getItems() {
    return this.items;
  }

   clearCart() {
    this.items = [];
    return this.items;
  }
 
  
/* totalprix(): void {
		let total = 0;
		this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				produit: item.produit,
			});
      
      total += item.produit.prix;
		}
  }  
  
  

 get totalPrice() {
        let sum = 0;
        for (let productId in this.items) {
            sum += this.items[productId].totalPrice;
        }
        return sum;

  */
}
