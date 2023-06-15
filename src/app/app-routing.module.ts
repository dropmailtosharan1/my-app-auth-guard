import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { GAuthGuard } from './guard/g-auth.guard';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  { path:'', component:HomeComponent, pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path:'calculator', component:CalculatorComponent},
  { path:'admin', component:AdminComponent, canActivate:[GAuthGuard]},
  { path:'login', component:LoginComponent},
  { path:'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
