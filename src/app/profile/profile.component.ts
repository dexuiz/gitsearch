import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent{
  user:any;
  repos:any;
  username:string;
  constructor(private GithubService:GithubService) {

    this.GithubService.getUser().subscribe(user=>{this.user=user;console.log(this.user)});
    this.GithubService.getRepos().subscribe(repos=>{this.repos=repos;console.log(this.repos)});
   }

   searchUser(){
     console.log(this.username);
     this.GithubService.update(this.username);
     this.GithubService.getUser().subscribe(user=>{this.user=user;console.log(this.user)});
     this.GithubService.getRepos().subscribe(repos=>{this.repos=repos;console.log(this.repos)});

   }
}
