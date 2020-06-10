import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserModule } from '../user/user.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    SharedModule,
    UserModule,
    CoreRoutingModule
  ] 
  , 
  exports :[HomeComponent , HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,]
})
export class CoreModule { }
