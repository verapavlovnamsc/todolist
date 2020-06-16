import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfilterclassComponent } from './newfilterclass.component';

describe('NewfilterclassComponent', () => {
  let component: NewfilterclassComponent;
  let fixture: ComponentFixture<NewfilterclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewfilterclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfilterclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
