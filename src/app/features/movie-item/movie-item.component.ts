import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MovieItemModule as Movie } from './movie-item.module';
// import { MovieService } from '../movies.service';

@Component({
  selector: 'vp-movie-item',
  templateUrl: './movie-item.html',
  styleUrls: ['./movie-item.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MovieItemComponent {
  private idMovie: string;
  @Input() movie: Movie;
  @Input() raiting: number;

  // constructor (private movieService: MovieService) {  }

  public onLike(): void {
    this.movie.likes++;
  }

  public onDislike(): void {
    if (this.movie.likes) {
      this.movie.likes--;
    }
  }

  public  changeStar($event, id): void {
    this.idMovie = id.toString();
    if ( this.movie.stars === 1 && $event.rating === 1 ) {
        this.movie.stars = 0;
    } else {
        this.movie.stars = $event.rating;
    }
    // this.movieService.postMovies (this.idMovie, this.movie);
  }
}
