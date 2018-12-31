import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IBond } from '../bonds/bond';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BondService {

  private _bondServiceUrl = 'http://localhost:5000/api/bonds';

  constructor(private httpClient: HttpClient) { }

  getBond(cusip: string): Observable<IBond> {
    return this.httpClient.get<IBond>(this._bondServiceUrl + '/' + cusip).pipe(
      catchError(this.handleError)
    );
  }

  getBonds(): Observable<IBond[]> {
    return this.httpClient.get<IBond[]>(this._bondServiceUrl).pipe(
      //tap(data => console.log('All' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(httpError: HttpErrorResponse) {
    let errorMessage = '';
    if (httpError.error instanceof ErrorEvent) {
      errorMessage = 'An error occurred: ${httpError.error.message}';
    }
    else {
      errorMessage = 'Back end API returned code: ${httpError.status}, message: ${httpError.message}';
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }
}