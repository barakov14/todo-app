import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'search-input',
  standalone: true,
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent {

}
