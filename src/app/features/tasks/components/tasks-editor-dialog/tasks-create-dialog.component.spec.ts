import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksCreateDialogComponent } from './tasks-create-dialog.component';

describe('TasksCreateDialogComponent', () => {
  let component: TasksCreateDialogComponent;
  let fixture: ComponentFixture<TasksCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksCreateDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
