import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputfilterComponent } from './inputfilter.component';

describe('InputfilterComponent', () => {
  let component: InputfilterComponent;
  let fixture: ComponentFixture<InputfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
