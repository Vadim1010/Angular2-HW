import { NgModule } from '@angular/core';
import { LikesComponent } from './likes.component';
import { ButtonModule } from '../button';

@NgModule({
    imports: [
         ButtonModule
    ],
  declarations: [
      LikesComponent
  ],
  exports: [ LikesComponent ]
})
export class LikesModule {

}
