import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPspComponent } from './select-psp.component';

describe('SelectPspComponent', () => {
  let component: SelectPspComponent;
  let fixture: ComponentFixture<SelectPspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
