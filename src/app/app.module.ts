import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InterfaceComponent } from './interface/interface.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ButtoneventComponent } from './buttonevents/buttonevent.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InterfaceComponent,
    AddstudentComponent,
    ButtoneventComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ HeaderComponent,InterfaceComponent,AddstudentComponent,LoginComponent]
})
export class AppModule { }
