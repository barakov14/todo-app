import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksDeleteButtonComponent } from './tasks-delete-button.component';

describe('TasksDeleteButtonComponent', () => {
  let component: TasksDeleteButtonComponent;
  let fixture: ComponentFixture<TasksDeleteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksDeleteButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksDeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
