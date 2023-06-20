import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFriendBtnComponent } from './remove-friend-btn.component';

describe('RemoveFriendBtnComponent', () => {
  let component: RemoveFriendBtnComponent;
  let fixture: ComponentFixture<RemoveFriendBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveFriendBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveFriendBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
