import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IBond } from '../bonds/bond';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IAssetType } from '../bonds/assetType';
import { ICouponType } from '../bonds/couponType';

@Injectable({
  providedIn: 'root'
})
export class BondService {

  private _bondServiceBaseUrl = 'http://localhost:5000/api';
  private _assetTypeEndPoint = 'assetTypes';
  private _bondEndPoint = 'bonds';
  private _couponTypeEndPoint = 'couponTypes';

  constructor(private httpClient: HttpClient) { }

  createBond(bond: IBond): Observable<IBond> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this._bondServiceBaseUrl}/${this._bondEndPoint}`;

    bond.id = 0;
    return this.httpClient.post<IBond>(url, bond, { headers: headers })
            .pipe(
              //tap(data => console.log(`createBond: ${JSON.stringify(data)}`)),
              catchError(this.handleError)
            );
  }

  getAssetTypes() : Observable<IAssetType[]> {
    return this.httpClient.get<IAssetType[]>(`${this._bondServiceBaseUrl}/${this._assetTypeEndPoint}`).pipe(
      catchError(this.handleError)
    );
  }

  getBond(id: number): Observable<IBond> {
    if (id === 0) {
      //console.log(`getBond(): ${id}`);
      return of(this.initializeBond());
    }
    return this.httpClient.get<IBond>(`${this._bondServiceBaseUrl}/${this._bondEndPoint}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getBonds(): Observable<IBond[]> {
    return this.httpClient.get<IBond[]>(`${this._bondServiceBaseUrl}/${this._bondEndPoint}`).pipe(
      //tap(data => console.log('All' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getCouponTypes(): Observable<ICouponType[]> {
    return this.httpClient.get<ICouponType[]>(`${this._bondServiceBaseUrl}/${this._couponTypeEndPoint}`).pipe(
      //tap(data => console.log('All' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updateBond(bond: IBond): Observable<IBond> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this._bondServiceBaseUrl}/${this._bondEndPoint}/${bond.id}`;

    return this.httpClient.put<IBond>(url, bond, { headers: headers })
            .pipe(
              //tap(() => console.log(`updateBond: ${bond.cusip}`)),
              //map(() => bond),
              catchError(this.handleError)
            );
  }

  private handleError(httpError: HttpErrorResponse) {
    let errorMessage = '';
    if (httpError.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${httpError.error.message}`;
    }
    else {
      errorMessage = `Back end API returned code: ${httpError.status}, message: ${httpError.message}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }

  private initializeBond(): IBond {
    return {
      id: 0,
      cusip: null,
      assetType: null,
      issuerIndustry: null,
      mortgageAmortizationTypeLevel: null,
      mortgageType: null,
      mortgagePrepayType: null,
      securityType: null,
      securityType2: null,
      couponType: null,
      marketSectorDescription: null,
      mortgageCollateralType: null,
      taxCode: null,
      bankQualified: null,
      datedDate: null,
      capitalPurpose: null
    }
  }
}