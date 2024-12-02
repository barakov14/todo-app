import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
    selector: 'ui-tag',
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
