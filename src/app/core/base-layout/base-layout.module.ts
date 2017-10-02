import { NgModule } from '@angular/core';
import { HeaderModule } from '../header';
import { FooterModule } from '../footer';
import { BaseLayoutComponent } from './base-layout.component';

@NgModule({
  declarations: [
    BaseLayoutComponent
  ],
  imports: [
    HeaderModule,
    FooterModule
  ],
  exports: [ BaseLayoutComponent ]
})

export class BaseLayoutModule {
}
