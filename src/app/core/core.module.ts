import { NgModule } from '@angular/core';
import { BaseLayoutModule } from './base-layout';
import { HeaderModule } from './header';
import { FooterModule } from './footer';

@NgModule({
  imports: [
    BaseLayoutModule,
    HeaderModule,
    FooterModule
  ],
  exports: [
    BaseLayoutModule,
    HeaderModule,
    FooterModule
  ]
})
export class CoreModule { }
