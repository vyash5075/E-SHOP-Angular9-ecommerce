import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthGuardService } from '../shared/auth-guard/user-auth-guard.service';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [UserAuthGuardService],
    component: HomeComponent
  },
  {
    path: 'home',
    canActivate: [UserAuthGuardService],
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
