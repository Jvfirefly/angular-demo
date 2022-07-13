import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [

{ path: "", redirectTo: '/login', pathMatch:'full' },
{ path: "login", component: LoginComponent },
{ path: "", component: HomeComponent },
{ path: 'products', component: ProductComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
