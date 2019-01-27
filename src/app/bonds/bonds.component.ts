import { Component, OnInit } from '@angular/core';
import { IBond } from './bond';
import { BondService } from '../services/bond.service';

@Component({
  //selector: 'app-bonds',
  templateUrl: './bonds.component.html',
  styleUrls: ['./bonds.component.css']
})
export class BondsComponent implements OnInit {
  pageTitle: string = 'Bond List';
  bonds: IBond[];
  errorMessage: string = '';
  loading: boolean = true;

  _filterText: string;
  get filterText(): string {
    return this._filterText;
  }
  set filterText(value: string) {
    this._filterText = value;
    this.filteredBonds = this.filterText ? this.filterBonds(this.filterText) : this.bonds;
  }

  filteredBonds: IBond[];

  constructor(private bondService: BondService) {
    this.loading = true;
  }

  ngOnInit() {
    this.bondService.getBonds().subscribe(
      bonds => {
        this.bonds = bonds;
        this.filteredBonds = this.bonds;
        this.loading = false;
      },
      error => this.errorMessage = <any>error);
  }

  filterBonds(filter: string): IBond[] {
    filter = filter.toLocaleLowerCase();
    return this.bonds.filter(
      (bond: IBond) => 
      bond.cusip.toLocaleLowerCase().indexOf(filter) !== -1);
  }
}