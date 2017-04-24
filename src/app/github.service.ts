import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService {
private username:string
  constructor(private Http:Http) {
    console.log("github service ready");
    this.username="dexuiz"
  }

  getUser(){
    return this.Http.get("http://api.github.com/users/"+this.username).map(res=>res.json());
  }

}
