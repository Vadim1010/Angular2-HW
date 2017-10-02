import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StarRatingModule } from 'angular-star-rating';
import { MovieDetailComponent } from './movie-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        StarRatingModule.forRoot()
    ],
    declarations: [
    MovieDetailComponent
    ],
    exports: [
        MovieDetailComponent
    ]
})

export class MovieModule {
  public id: number;
  public title: string;
  public posterUrl: string;
  public stars: number;
  public likes: number;
  public genres: string[];
  public actors: string[];
  public director: string;
  public description: string;

}
