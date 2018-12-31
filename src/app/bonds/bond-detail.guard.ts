import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BondService } from '../services/bond.service';
import { IBond } from './bond';

@Injectable({
  providedIn: 'root'
})
export class BondDetailGuard implements CanActivate {
  constructor(private router: Router,
              private bondService: BondService) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let cusip = next.url[1].path;

      this.bondService.getBond(cusip).subscribe(
        bond => {
          //console.log(bond);
          if (!bond)
          {
            this.router.navigate(['/bonds']);
            return false;
          }
        });

      return true;
  }
}