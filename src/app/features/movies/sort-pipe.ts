import { Pipe, PipeTransform } from '@angular/core';
import { MovieModule } from '../movie-detail';

@Pipe({
  name: 'mySort',
  pure: false
})
export class SortPipe implements PipeTransform {
  public transform(items: MovieModule[], filter: string) {
    if (!items || !filter) {
      return items;
    }
    switch (filter) {
      case 'likes':
        return items.sort((item1, item2) => item2.likes - item1.likes);
      default:
        return items.sort((item1, item2) => item2.stars - item1.stars);
    }
  }
}
