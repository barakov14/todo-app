import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'td-not-authorized-layouts',
  imports: [
    RouterOutlet
  ],
  templateUrl: './not-authorized-layout.component.html',
  styleUrl: './not-authorized-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotAuthorizedLayoutComponent {

}
