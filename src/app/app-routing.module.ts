import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AboutComponent } from './components/about/about.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AuthGuard } from './services/auth-guard.guard';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'about',component:AboutComponent},
  {path:'cart',component:CartComponent,canActivate:[AuthGuard]},
  {path:'user',component:AuthenticationComponent},
  {path:'details/:productId',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
