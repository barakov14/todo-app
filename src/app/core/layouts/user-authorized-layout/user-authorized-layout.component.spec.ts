import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthorizedLayoutComponent } from './user-authorized-layout.component';

describe('UserAuthorizedLayoutComponent', () => {
  let component: UserAuthorizedLayoutComponent;
  let fixture: ComponentFixture<UserAuthorizedLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAuthorizedLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAuthorizedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
