import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitsService} from '../produits.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent  {
  
  
  private produit = {"nom":"", "type":"", "marque":"", "prix":""};
  private message : string ="";
  constructor(
    private router: Router,
    private produitsService : ProduitsService
  ) { }

onSubmit(f: NgForm) {
this.produitsService.getproductname(this.produit).subscribe(reponse => {
    this.message = reponse['message'];
    if (reponse['resultat']) {
      console.log('OKKK');
    }
});
  
}

}