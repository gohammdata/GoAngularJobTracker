import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public posts: any;
  
  public constructor(private http: Http, private router: Router, private location: Location) {
    this.posts = [];
  }
  public ngOnInit() {
    this.location.subscribe(() => {
        this.refresh();
    });
    this.refresh();
  }
  
  private refresh() {
  this.http.get("http://localhost:8080/posts").pipe(map((res: Response)=> res.json()))
    .subscribe(result => {
        this.posts = result;
    })
  }
  public create() {
    this.router.navigate(["create"]);
  }
}
