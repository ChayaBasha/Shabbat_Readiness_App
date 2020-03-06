import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  HttpClient, 
          HttpHeaders,
          HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
// import { BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// 3rd party stuff injected into our project
import { environment } from '../environments/environment';

import {ChecklistModel, Checklist} from '../../backend/models/checklist.model'
import { TaskModel } from 'backend/models/tasks.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {
  API_URL: string = environment.apiUrl;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  private checklistToUpdate$: Observable<ChecklistModel>;

  constructor(private httpClient: HttpClient, public router: Router) {
  }

  getChecklists(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/checklist/checklist`).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  addChecklist(checklistName: string, tasks: TaskModel[]): Observable<ChecklistModel> {
    return this.httpClient.post<ChecklistModel>(`${this.API_URL}/checklist/addChecklist`, {checklistName, tasks}, httpOptions);
  }

  // addTask(taskName: string, duration: number): Observable<TaskModel> {
  //   return this.httpClient.post<TaskModel>(`${this.API_URL}/checklist/addChecklist`, {taskName, duration}, httpOptions);
  // }

  getChecklist(id:number | string): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/checklist/checklist`).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
 
  updateChecklist(checklistName: string, tasks: TaskModel[]) {
    return this.httpClient.put<any>(`${this.API_URL}/checklist/updateChecklist`, {checklistName, tasks}).pipe(
      map((res: any) => {
        this.getChecklist(res._id).subscribe((result) => {
          this.checklistToUpdate$ = result;
          localStorage.setItem('checklist', JSON.stringify(result));
          return result;
        });
      }),
      catchError(this.handleError));
  }

  handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error) {
      return throwError(errorMessage);
    }
    const errorCode = errorRes.error;
    switch (errorCode) {
      case 'SERVER_ERROR':
        errorMessage = 'Something happened server-side and the recipe wasn\'t added.';
        break;
      case 'UPDATE_FAIL':
        errorMessage = 'Failed to update recipe. Please try again.';
        break;
      default: {
        errorMessage = 'An error occurred! Please try again or contact support.';
        break;
      }
    }
    return throwError(errorMessage);
  }
}