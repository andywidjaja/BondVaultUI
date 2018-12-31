import { Component, OnInit } from '@angular/core';
import { IBond } from './bond';
import { ActivatedRoute, Router } from '@angular/router';
import { BondService } from '../services/bond.service';

@Component({
  //selector: 'app-bond-detail',
  templateUrl: './bond-detail.component.html',
  styleUrls: ['./bond-detail.component.css']
})
export class BondDetailComponent implements OnInit {
  pageTitle: string = 'Bond Detail';
  bond: IBond;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private bondService: BondService,
              private router: Router) {
  }

  ngOnInit() {
    let cusip = this.route.snapshot.paramMap.get('cusip');

    this.bondService.getBond(cusip).subscribe(
      bond => {
        this.bond = bond;
        //console.log(bond);
      },
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/bonds']);
  }
}