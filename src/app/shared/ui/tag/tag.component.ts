import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'ui-tag',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent {
  @Input() tag!: string
}
