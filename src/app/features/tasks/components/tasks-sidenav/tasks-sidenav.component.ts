import {ChangeDetectionStrategy, Component, DestroyRef, inject, output} from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {ButtonDirective} from "@td/shared/directives";
import {TagComponent} from "@td/shared/components";

@Component({
  selector: 'td-tasks-sidenav',
  imports: [
    ButtonDirective,
    TagComponent
  ],
  templateUrl: './tasks-sidenav.component.html',
  styleUrl: './tasks-sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksSidenavComponent {

  // public isTriggered = this.tasksService.sidenavTriggerByFilter

  private readonly destroyRef = inject(DestroyRef)
  private readonly dialog = inject(Dialog)


  createTask = output<void>()

  tags = ['Продуктивность', 'Образование', 'Здоровье', 'Срочно']

  /*onToggleTag(tag: string) {
    this.tasksService.onToggleTag(tag)
  }

  isSelected(tag: string): Observable<boolean> {
    return this.tasksService.selectedTags.pipe(
      takeUntilDestroyed(this.destroyRef),
      map((res) => {
        return res.includes(tag)
      })
    )
  }*/


  onCreateTask() {
    this.createTask.emit()
  }
}
