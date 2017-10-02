import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { MovieModule  as Movie } from './movie-detail';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class MovieService {

  public movies: Movie[];
  private moviesUrl = 'http://localhost:3000';

  constructor(private http: Http) { };

  public getMovies(): Observable<Movie[]> {
    return this.http.get(this.moviesUrl + '/get/posts/movies')
      .map( (response) => response.json())
        .catch((error) => Observable.throw(error.json().error || 'Server error'));
  }

  // public postMovies (id: string, value): void {
  //   this.http.post(this.moviesUrl + '/post/posts/movies', value, {
  //     params: new HttpParams().set('id', id)
  //   }).subscribe();
  // }
}