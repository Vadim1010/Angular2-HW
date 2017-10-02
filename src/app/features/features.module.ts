import { NgModule} from '@angular/core';
import { MoviesModule } from './movies';
import { MovieModule} from './movie-detail';
import { MovieItemModule} from './movie-item';

@NgModule({
  imports: [
    MoviesModule,
    MovieItemModule,
    MovieModule
  ],
  exports: [
    MoviesModule,
    MovieItemModule,
    MovieModule
  ]
})
export class FeaturesModule { }