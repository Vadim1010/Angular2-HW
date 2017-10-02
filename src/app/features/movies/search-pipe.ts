import { Pipe, PipeTransform } from '@angular/core';
import { MovieModule } from '../movie-detail';

@Pipe({
  name: 'mySearch',
  pure: false
})
export class SearchPipe implements PipeTransform {
  public transform (items: MovieModule[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter((item) => item.title.toLowerCase()
        .indexOf(filter.toLocaleLowerCase()) !== -1);
  }
}
