import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListRowComponent } from './tasks-list-row.component';

describe('TasksListRowComponent', () => {
  let component: TasksListRowComponent;
  let fixture: ComponentFixture<TasksListRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksListRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
