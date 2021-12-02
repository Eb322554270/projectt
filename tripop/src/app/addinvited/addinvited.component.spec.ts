import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinvitedComponent } from './addinvited.component';

describe('AddinvitedComponent', () => {
  let component: AddinvitedComponent;
  let fixture: ComponentFixture<AddinvitedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinvitedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinvitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
