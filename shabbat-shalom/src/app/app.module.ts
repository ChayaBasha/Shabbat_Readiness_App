import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ShabbatAlertComponent } from './shabbat-alert/shabbat-alert.component';
import { LoginRegisterComponent } from './login-register/login-register.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ShabbatAlertComponent },
      { path: 'login-register', component: LoginRegisterComponent}
    ])
  ],
  declarations: [
    AppComponent,
    ToolBarComponent,
    ShabbatAlertComponent,
    LoginRegisterComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
