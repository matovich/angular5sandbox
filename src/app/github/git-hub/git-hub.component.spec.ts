import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GitHubComponent } from './git-hub.component';
import { GitHubService } from '../git-hub.service'

describe('GitHubComponent', () => {
  let component: GitHubComponent;
  let fixture: ComponentFixture<GitHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubComponent ],
      imports: [ RouterTestingModule, ReactiveFormsModule, HttpModule ],
      providers: [ GitHubService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

