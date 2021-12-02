import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaphallComponent } from './maphall.component';

describe('MaphallComponent', () => {
  let component: MaphallComponent;
  let fixture: ComponentFixture<MaphallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaphallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaphallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
