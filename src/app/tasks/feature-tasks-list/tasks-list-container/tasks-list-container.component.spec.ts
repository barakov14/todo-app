import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListContainerComponent } from './tasks-list-container.component';

describe('TasksListContainerComponent', () => {
  let component: TasksListContainerComponent;
  let fixture: ComponentFixture<TasksListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksListContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
