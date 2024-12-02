import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {SidenavComponent} from "../../components/sidenav/sidenav.component";

@Component({
  selector: 'td-user-authorized-layouts',
  imports: [
    RouterOutlet,
    SidenavComponent
  ],
  templateUrl: './user-authorized-layout.component.html',
  styleUrl: './user-authorized-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAuthorizedLayoutComponent {

}
