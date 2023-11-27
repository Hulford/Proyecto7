import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent {
  public myform: FormGroup = this.fb.group({
     region: ['', Validators.required],
     country: ['', Validators.required],
     borders: ['', Validators.required],
  })
  constructor(
        private fb: FormBuilder,
       ){}
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
