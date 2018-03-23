import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsJumbotronClientComponent } from './bs-jumbotron-client.component';
import { BsJumbotronComponent } from '../bs-jumbotron/bs-jumbotron.component';

describe('BsJumbotronClientComponent', () => {
  let component: BsJumbotronClientComponent;
  let fixture: ComponentFixture<BsJumbotronClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsJumbotronClientComponent, BsJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsJumbotronClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create JumboTron client', () => {
    expect(component).toBeTruthy();
  });
});
