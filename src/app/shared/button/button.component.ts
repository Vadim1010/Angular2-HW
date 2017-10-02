import {
  Component,
  Input, Output, EventEmitter, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'vp-button',
  templateUrl: './button.html',
  styleUrls: [ './button.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class  ButtonComponent {
  @Input() className: string = 'btn';
  @Input() type: string = 'button';
  @Input() value: string;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

}
