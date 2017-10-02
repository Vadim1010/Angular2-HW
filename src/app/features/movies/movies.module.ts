import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './movies.component';
import { MovieService } from '../movies.service';
import { StarRatingModule } from 'angular-star-rating';
import { MovieModule } from '../movie-detail/';
import { MovieItemModule } from '../movie-item/';
import { LikesModule, ButtonModule } from '../../shared/';
import { SearchPipe } from './search-pipe';
import { SortPipe } from './sort-pipe';

@NgModule({
  imports: [
    BrowserModule,
    StarRatingModule.forRoot(),
    MovieModule,
    MovieItemModule,
    LikesModule,
    FormsModule,
    ButtonModule
  ],
  declarations: [
    MoviesComponent,
    SearchPipe,
    SortPipe
  ],
  providers: [MovieService],
  exports: [
    MoviesComponent
  ]
})

export class MoviesModule {
}
