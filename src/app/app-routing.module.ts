import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociatelistingComponent } from './component/associatelisting/associatelisting.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { authGuard } from './guard/auth.guard';
import { NestedtableComponent } from './component/nestedtable/nestedtable.component';
import { MaskComponent } from './componemt/mask/mask.component';
import { NestednewComponent } from './component/nestednew/nestednew.component';

const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[authGuard]},
  {path:'associate',component:AssociatelistingComponent,canActivate:[authGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'nested',component:NestedtableComponent},
  {path:'mask',component:MaskComponent},
  {path:'nestednew',component:NestednewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
