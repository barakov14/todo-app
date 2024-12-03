import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {TasksSidenavComponent} from "../../../features/tasks/components/tasks-sidenav/tasks-sidenav.component";

@Component({
  selector: 'td-user-authorized-layouts',
  imports: [
    RouterOutlet,
    TasksSidenavComponent
  ],
  templateUrl: './user-authorized-layout.component.html',
  styleUrl: './user-authorized-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAuthorizedLayoutComponent {

}
