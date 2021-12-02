import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinvitedComponent } from './updateinvited.component';

describe('UpdateinvitedComponent', () => {
  let component: UpdateinvitedComponent;
  let fixture: ComponentFixture<UpdateinvitedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateinvitedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateinvitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
