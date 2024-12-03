import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'td-user-authorized-layouts',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './user-authorized-layout.component.html',
  styleUrl: './user-authorized-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAuthorizedLayoutComponent {

}
