import { Component, OnInit } from '@angular/core';
import { IBond } from './bond';
import { ActivatedRoute, Router } from '@angular/router';
import { BondService } from '../services/bond.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { IAssetType } from './assetType';
import { ICouponType } from './couponType';
//import { MatDatepicker } from '@angular/material';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@Component({
  //selector: 'app-bond-detail',
  templateUrl: './bond-detail.component.html',
  styleUrls: ['./bond-detail.component.css']
})
export class BondDetailComponent implements OnInit {
  pageTitle: string = 'Bond Detail';
  bond: IBond;
  assetTypes: IAssetType[];
  couponTypes: ICouponType[];
  errorMessage: string;
  cusipMessage: string;

  bondForm: FormGroup;

  private validationMessage = {
    minlength: 'Cusip must be longer than 9 characters'
  };

  constructor(private route: ActivatedRoute,
              private bondService: BondService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    // Create form group
    this.bondForm = this.formBuilder.group({
      cusip: ['', [Validators.required, Validators.minLength(9)]],
      assetType: ['', Validators.required],
      couponType: ['', Validators.required],
      marketSectorDescription: [''],
      bankQualifiedFlag: [''],
      datedDate: [null]
    });

    // Get the id from url
    let id = this.route.snapshot.paramMap.get('id');
    //console.log('id: ' + id);

    // Get bond detail information from back end
    this.getBond(+id);

    // Test debounce
    const cusipControl = this.bondForm.get('cusip');
    cusipControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(value => {
      this.setMessage(cusipControl);
      });

    // const marketSectorDescriptionControl = this.bondForm.get('marketSectorDescription');
    // marketSectorDescriptionControl.valueChanges.pipe(
    //   debounceTime(1000)
    // ).subscribe(value => {
    //   this.setMessage(marketSectorDescriptionControl);
    //   });
  }

  onBack(): void {
    this.router.navigate(['/bonds']);
  }

  getBond(id: number): void {
    // Get bond detail information from back end
    this.bondService.getBond(id).subscribe(
      (bond: IBond) => {
        //console.log(bond);
        this.displayBond(bond);
      },
      error => this.errorMessage = <any>error);

    this.bondService.getAssetTypes().subscribe(
      (assetTypes: IAssetType[]) => {
        this.assetTypes = assetTypes;
      },
      error => this.errorMessage = <any>error);

    this.bondService.getCouponTypes().subscribe(
      (couponTypes: ICouponType[]) => {
        this.couponTypes = couponTypes;
      },
      error => this.errorMessage = <any>error);
  }

  displayBond(bond: IBond): void {
    if (this.bondForm) {
      this.bondForm.reset();
    }

    this.bond = bond;

    if (this.bond.id === 0) {
      this.pageTitle = 'Add Bond';
    }
    else {
      this.pageTitle = `Edit Bond: ${this.bond.cusip}`;
    }

    // Update bond data on the form
    this.bondForm.patchValue({
        cusip: this.bond.cusip,
        assetType: this.bond.assetType,
        couponType: this.bond.couponType,
        marketSectorDescription: this.bond.marketSectorDescription,
        bankQualifiedFlag: this.bond.bankQualified,
        datedDate: this.bond.datedDate
      }
    );
  }

  onSaveComplete(): void {
    this.bondForm.reset();
    this.router.navigate(['/bonds']);
  }

  saveBond(): void {
    if (!this.bondForm.valid) {
      this.errorMessage = 'Please correct validation errors';
      return;
    }

    if (!this.bondForm.dirty) {
      this.onSaveComplete();
      return;
    }

    const bond = { ...this.bond, ...this.bondForm.value};

    if (bond.id === 0) {
      //console.log('Create a new bond');

      this.bondService.createBond(bond)
        .subscribe(
          () => this.onSaveComplete(),
          (error: any) => this.errorMessage = <any> error
        );
    }
    else {
      this.bondService.updateBond(bond)
        .subscribe(
          () => this.onSaveComplete(),
          (error: any) => this.errorMessage = <any> error
        );
    }
  }

  setMessage(c: AbstractControl) : void {
    this.cusipMessage = '';

    if ((c.touched || c.dirty) && c.errors) {
      this.cusipMessage = Object.keys(c.errors).map(
        key => this.cusipMessage += this.validationMessage[key]).join(' ');
    }
  }
}