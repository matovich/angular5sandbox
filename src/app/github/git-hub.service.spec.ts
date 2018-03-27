import { TestBed, inject, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { GitHubService } from './git-hub.service';

describe('GithubService', () => {
  let gitHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitHubService],
      imports: [ HttpModule ]
    });
  });

  beforeEach(inject([GitHubService], service => { gitHubService = service; }))

  it('should be created', inject([GitHubService], (service: GitHubService) => {
    expect(service).toBeTruthy();
  }));

  it('should be available on my local let object', () => {
    expect(gitHubService).toBeTruthy();
  });
});
