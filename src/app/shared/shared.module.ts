import { NgModule } from '@angular/core';
import { ButtonModule } from './button';
import { LikesModule } from './likes';

@NgModule({
  imports: [
    ButtonModule,
    LikesModule
  ],
  exports: [
    ButtonModule,
    LikesModule
  ]
})
export class SharedModule {
}
