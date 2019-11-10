import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Methods": "GET,POST",
      "Access-Control-Allow-Headers": "Content-type",
      "Content-Type":  "application/json",
      "Access-Control-Allow-Origine": "*",
      'Authorization': 'mon-jeton'
    })
  };


@Injectable({
    providedIn: 'root'
  })
  export class ProduitsService {
  
    private urlBase: string = "http://localhost:8888/";
    private produit = {"nom":""};

    constructor(private http: HttpClient) { }

    connect(data: string) { this.produit }


    getProduits():Observable<any> { 
        return this.http.get(this.urlBase+'produits');
    }

    getProduitsParCategorie(categorie):Observable<any> { 
        return this.http.get(this.urlBase+'produits/'+categorie);
    }

    getCategories(): Observable<any> { 
        return this.http.get(this.urlBase+'categories');
    }
    getproductname(identifiants): Observable<any> {
        return this.http.get(this.urlBase+'produits/recherche');

    }
  }