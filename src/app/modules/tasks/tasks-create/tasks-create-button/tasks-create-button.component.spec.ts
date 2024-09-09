import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksCreateButtonComponent } from './tasks-create-button.component';

describe('TasksCreateButtonComponent', () => {
  let component: TasksCreateButtonComponent;
  let fixture: ComponentFixture<TasksCreateButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksCreateButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksCreateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
