import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ShabbatAlertComponent } from './shabbat-alert/shabbat-alert.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login/login-form/login-form.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ShabbatAlertComponent },
      {path: 'login',component:LoginComponent},
    ])
  ],
  declarations: [
    AppComponent,
    ToolBarComponent,
    ShabbatAlertComponent,
    LoginComponent,
    FooterComponent,
    LoginFormComponent,
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
