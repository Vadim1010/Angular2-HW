import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { MovieModule as Movie } from '../movie-detail';
import { MovieService } from '../movies.service';

@Component({
  selector: 'vp-movies',
  templateUrl: './movies.html',
  styleUrls: ['./movies.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MoviesComponent implements OnInit {
  public movies: Movie[];
  public selectedMovie: Movie;

  @Input() movie: Movie;
  @Input() sortBy: string;

  constructor (private movieService: MovieService) {
  }

  public searche (value: string): void {
      this.sortBy = value;
  }

  public ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      (movies: Movie[]) => {
        this.movies = movies;
        this.selectedMovie = movies[0];
      });
  }

  public onSelectedMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
