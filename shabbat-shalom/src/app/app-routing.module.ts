import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ShabbatAlertComponent } from './shabbat-alert/shabbat-alert.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { ChecklistContainerComponent } from './checklist-container/checklist-container.component';
import { RegisterComponent } from './register/register.component';
import { AddChecklistComponent } from './checklist-container/add-checklist/add-checklist.component';
import { ExampleChecklistsComponent } from './checklist-container/example-checklists/example-checklists.component';

const routes: Routes = [
{ path: '', component: ShabbatAlertComponent },
{path: 'login',component: LoginComponent},
{path: 'checklist', component: ChecklistContainerComponent}, 
{path: 'register', component: RegisterComponent},
{path: 'addChecklist', component: AddChecklistComponent},
{path: 'exampleChecklists', component: ExampleChecklistsComponent}

]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
