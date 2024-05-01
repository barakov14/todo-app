import { ChangeDetectionStrategy, Component } from '@angular/core';
import {SidenavComponent} from "../shared/layout/sidenav/sidenav.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    SidenavComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
