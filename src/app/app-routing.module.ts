import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [

{ path: "", redirectTo: '/home', pathMatch:'full' },
{ path: "login", component: LoginComponent },
{ path: "home", component: HomeComponent },
{ path: 'products', component: ProductComponent },
{ path: '**', component: PageNotFoundComponent}


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingCompoonents = [LoginComponent, HomeComponent, ProductComponent, PageNotFoundComponent]