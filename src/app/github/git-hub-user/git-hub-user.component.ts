import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-git-hub-user',
  templateUrl: './git-hub-user.component.html',
  styleUrls: ['./git-hub-user.component.css']
})
export class GitHubUserComponent implements OnInit, OnDestroy {
  login; 
  score; 
  subscription; 
  
  constructor(private _route: ActivatedRoute) { } 

  ngOnInit() {
    this.subscription = this._route.params.subscribe(params => { 
      this.login = params["login"]; 
      this.score = params["score"]; 
    }) 
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

