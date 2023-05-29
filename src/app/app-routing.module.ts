import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { gAuthGuard } from './guard/g-auth.guard';

const routes: Routes = [
  { path:'', component:HomeComponent, pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path:'admin', component:AdminComponent, canActivate:[gAuthGuard]},
  { path:'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
