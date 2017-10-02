import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MovieItemComponent } from './movie-item.component';
import { StarRatingModule } from 'angular-star-rating';
import { LikesModule } from '../../shared';

@NgModule({
  imports: [
    BrowserModule,
    StarRatingModule.forRoot(),
    LikesModule
  ],
  declarations: [
    MovieItemComponent
  ],
  exports: [MovieItemComponent]
})

export class MovieItemModule {
  public likes: number;
  public title: string;
  public stars: number;

}
