import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
posts;
constructor(private apiService: ApiService){ }
ngOnInit(){
    this.apiService.getPosts().subscribe((data)=>{
    console.log(data);
    this.posts = data['posts'];
    })
}
}

