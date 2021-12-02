import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceInvitedComponent } from './place-invited.component';

describe('PlaceInvitedComponent', () => {
  let component: PlaceInvitedComponent;
  let fixture: ComponentFixture<PlaceInvitedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceInvitedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceInvitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
