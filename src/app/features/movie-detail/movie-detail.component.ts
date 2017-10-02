import { Component, Input, ViewEncapsulation } from '@angular/core';

import { MovieModule as Movie } from './movie-detail.module';

@Component({
  selector: 'vp-movie-detail',
  templateUrl: './movie-detail.html',
  styleUrls: ['./movie-detail.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieDetailComponent {
  @Input() movie: Movie;

  public onClickResult: Event;

  public changeStars = ($event) => {
    this.onClickResult = $event;
    this.movie.stars = $event.rating;
  }
}
