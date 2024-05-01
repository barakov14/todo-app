import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'ui-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {

}
