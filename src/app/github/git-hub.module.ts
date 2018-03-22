import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { GitHubComponent } from './git-hub/git-hub.component';
import { GitHubUserComponent } from './git-hub-user/git-hub-user.component';
import { GitHubService } from './git-hub.service';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, HttpModule, RouterModule 
  ],
  declarations: [GitHubComponent, GitHubUserComponent],
  exports: [],
  providers: [GitHubService]
})
export class GitHubModule { }
