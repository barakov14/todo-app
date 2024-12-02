import {ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, inject, Output} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {debounceTime} from "rxjs";

@Component({
    selector: 'components-search-input',
    imports: [
        ReactiveFormsModule
    ],
    templateUrl: './search-input.component.html',
    styleUrl: './search-input.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent {

  private readonly destroyRef = inject(DestroyRef)

  filter = new FormControl('')

  @Output() onSearch = new EventEmitter<string>()

  constructor() {
    this.filter.valueChanges.pipe(
      debounceTime(200),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(
      (v) => {
        this.onSearch.emit(v as string)
      }
    )
  }
}
