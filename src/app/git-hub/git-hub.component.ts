import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../git-hub.service';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.css'],
  providers: [GitHubService]
})
export class GitHubComponent implements OnInit {
  isLoading = false;
  searchControl = new FormControl();
  users = [];

  constructor(private _gitHubService: GitHubService) { }

  ngOnInit() {
    this.searchControl.valueChanges.filter(text => text.length > 2)
    .debounceTime(400)
    .distinctUntilChanged()
    .subscribe(value => { 
      this.isLoading = true;
      this.callGitHub(value); 
    });
  }

  callGitHub(value: string) {
    this._gitHubService.getGitHubData(value)
    .subscribe(data => {
      console.log(data.items);
      this.isLoading = false;
      this.users = data.items;
    });
  }

}
