import { Component, OnInit } from '@angular/core';
import { AuthentificationService} from '../authentification.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { Location } from '@angular/common';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
    private user: Observable<string>;
    items;

    constructor(private authService: AuthentificationService,
        private router: Router, private cartService: CartService,
        public _router: Router, public _location: Location) {
            this.user = this.authService.getUser();
         }
    
    ngOnInit() {
        this.router.navigate(['/categories']);
    }

    deconnexion() {
        this.authService.disconnect();
        this.router.navigate(['/categories']);
    }

    clearCart() : void {
        this._router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
          console.log(decodeURI(this._location.path()));
          this._router.navigate([decodeURI(this._location.path())]);
        });
      }
}