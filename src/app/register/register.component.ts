import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthentificationService} from '../authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private utilisateur = {"email":"", "password":""};
  private message : string ="";


  constructor(private authService: AuthentificationService,
    private router: Router) { }

onSubmit() {
    this.authService.ajouterUser(this.utilisateur).subscribe(reponse => {
      this.message = reponse['message'];

      setTimeout( () => { this.router.navigate(['/categories']); }, 3000);

    });
}

  ngOnInit() {
  }

}
