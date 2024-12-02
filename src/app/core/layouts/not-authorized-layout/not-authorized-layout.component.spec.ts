import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAuthorizedLayoutComponent } from './not-authorized-layout.component';

describe('NotAuthorizedLayoutComponent', () => {
  let component: NotAuthorizedLayoutComponent;
  let fixture: ComponentFixture<NotAuthorizedLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotAuthorizedLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotAuthorizedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
