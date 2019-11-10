import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProduitsComponent } from './produits/produits.component';
import { CategoriesComponent } from './categories/categories.component';
import { RegisterComponent } from './register/register.component';
import { FilterComponent } from './filter/filter.component';
import { CartComponent } from './cart/cart.component';




const routes: Routes = [
  {
    path: 'membres/connexion',
    component: ConnexionComponent
  },
  { path: 'categories',
    component: CategoriesComponent
  },
  { path: 'produits/:categorie',
    component: ProduitsComponent
  },
  {
    path: 'produits',
    component: ProduitsComponent
  },
  {
    path: 'membres/register',
    component: RegisterComponent
  },
  
  {
    path: 'filter',
    component: FilterComponent
  },
  
  {
    path: 'cart',
    component: CartComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }