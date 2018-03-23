import { TestBed, inject } from '@angular/core/testing';
//import { HttpTesting } from '@angular/http/testing';
import { GitHubService } from './git-hub.service';

describe('GithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitHubService]
    });
  });

  it('should be created', inject([GitHubService], (service: GitHubService) => {
    expect(service).toBeTruthy();
  }));
});
