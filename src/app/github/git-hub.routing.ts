import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitHubComponent } from './git-hub/git-hub.component';
import { GitHubUserComponent } from './git-hub-user/git-hub-user.component';
import { AuthGuardService } from '../login/auth-guard.service';

export const GitHubRouting = RouterModule.forChild([
    { path: 'GitHub', component: GitHubComponent, canActivate: [AuthGuardService] },
    { path: 'GitHub/user/:login/:score', component: GitHubUserComponent, canActivate: [AuthGuardService] },
]);
