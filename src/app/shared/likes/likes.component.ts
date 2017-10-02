import {
  Component,
  Input, Output, EventEmitter, ViewEncapsulation
} from '@angular/core';


@Component({
  selector: 'vp-likes',
  templateUrl: './likes.html',
  styleUrls: ['./likes.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LikesComponent {

  @Input() likes: number = 0;

  @Output() like: EventEmitter<void> = new EventEmitter<void>();
  @Output() dislike: EventEmitter<void> = new EventEmitter<void>();


  public onLike(): void {
    this.like.emit();
  }

  public onDislike(): void {
    this.dislike.emit();
  }
}
