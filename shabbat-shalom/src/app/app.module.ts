import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ShabbatAlertComponent } from './shabbat-alert/shabbat-alert.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { ChecklistContainerComponent } from './checklist-container/checklist-container.component';
import { AuthInterceptor } from './auth.interceptor';
import { RegisterComponent } from './register/register.component';
import { RegisterFormComponent } from './register/register-form/register-form.component';
import { ChecklistsComponent } from './checklist-container/checklists/checklists.component';
import { AddChecklistComponent } from './checklist-container/add-checklist/add-checklist.component';
import { ChecklistFormComponent } from './checklist-container/add-checklist/checklist-form/checklist-form.component';
import { TaskFormComponent } from './checklist-container/add-checklist/task-form/task-form.component';
import { ExampleChecklistsComponent } from './checklist-container/example-checklists/example-checklists.component';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    ToolBarComponent,
    ShabbatAlertComponent,
    LoginComponent,
    FooterComponent,
    LoginFormComponent,
    ChecklistContainerComponent,
    RegisterComponent,
    RegisterFormComponent,
    ChecklistsComponent,
    AddChecklistComponent,
    ChecklistFormComponent,
    TaskFormComponent,
    ExampleChecklistsComponent,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
