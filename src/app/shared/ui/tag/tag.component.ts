import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-tag',
  standalone: true,
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent {

}
