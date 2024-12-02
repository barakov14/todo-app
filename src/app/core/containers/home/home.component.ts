import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
    selector: 'home',
    imports: [
        SidenavComponent,
        RouterOutlet,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
