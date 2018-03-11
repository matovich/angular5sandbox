import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableSampleComponent } from './observable-sample.component';

describe('ObservableSampleComponent', () => {
  let component: ObservableSampleComponent;
  let fixture: ComponentFixture<ObservableSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
