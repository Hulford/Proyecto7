import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit{

public countriesByRegion: SmallCountry[]=[];
public borders: string[] = [];

  public myform: FormGroup = this.fb.group({
     region: ['', Validators.required],
     country: ['', Validators.required],
     border: ['', Validators.required],
  })
  constructor(
        private fb: FormBuilder,
        private countriesService: CountriesService,
       ){}
  ngOnInit(): void {
this.onRegionsChanged();
this.onCountryChanged();
  }

       get regions(): Region[]{
        return this.countriesService.regions;
       }
  onRegionsChanged(): void{
  this.myform.get('region')!.valueChanges
  .pipe(
    tap( () => this.myform.get('country')!.setValue('')),
    switchMap(region => this.countriesService.getCountriesByRegion(region))
  )
.subscribe(countries => {
  this.countriesByRegion = countries;
 // console.log({ countries})
} );
 }

onCountryChanged(): void{
  this.myform.get('country')!.valueChanges
  .pipe(
    tap( () => this.myform.get('border')!.setValue('')),
    tap(()=> this.borders = []),
    filter(( value: string) => value.length>0 ),
    switchMap(alphaCode => this.countriesService.getCountryByAlphaCode(alphaCode))
  )
.subscribe(country => {
 // this.countriesByRegion = countries;
  //console.log({borders: country.borders})
  this.borders = country.borders;
} );
}

}


// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { CountriesRoutingModule } from './countries-routing.module';
// import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



// @NgModule({
//   declarations: [
//     SelectorPageComponent
//   ],
//   imports: [
//     CommonModule,
//     CountriesRoutingModule,
//     ReactiveFormsModule,
//   ]
// })
// export class CountriesModule {
//   public myform: FormGroup = this.fb.group({
// region: ['', Validators.required],
// country: ['', Validators.required],
// borders: ['', Validators.required],
//   })
//   constructor(
//     private fb: FormBuilder,
//   ){}
// }
