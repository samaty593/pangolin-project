import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilsListComponent } from './profils-list.component';

describe('ProfilsListComponent', () => {
  let component: ProfilsListComponent;
  let fixture: ComponentFixture<ProfilsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
