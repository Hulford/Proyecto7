import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes= [
  {
    path: 'selector'
    // loadChildren: lazyload
  },
  {
    path: '**',
    redirectTo: 'selector',
    // loadChildren: lazyload
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule
  ],exports: [
RouterModule
  ]
})
export class AppRoutingModule { }
