import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


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
  export class AuthentificationService {
  
    private user:Subject<string> = new BehaviorSubject<string>(undefined);
    private baseURL: string = "http://localhost:8888/";
    
  
    constructor(private http: HttpClient) { }

    getUser() { return this.user; }

    connect(data: string) { this.user.next(data); }

    disconnect() { this.user.next(null); }

    verificationConnexion(identifiants): Observable<any> {
        return this.http.post(this.baseURL+'membre/connexion',
        JSON.stringify(identifiants), httpOptions);    
    }
    ajouterUser(identifiants): Observable<any> {
      return this.http.post(this.baseURL+'membre/register',
      JSON.stringify(identifiants), httpOptions);    
  }
  }