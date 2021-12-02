import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalschdulingComponent } from './finalschduling.component';

describe('FinalschdulingComponent', () => {
  let component: FinalschdulingComponent;
  let fixture: ComponentFixture<FinalschdulingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalschdulingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalschdulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
