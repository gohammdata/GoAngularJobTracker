import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


export class ApiService {
    API_KEY = '98hbun98h';
  constructor(private http: Http) { }
  public getPosts(){
    return this.http.get('http://localhost8080/posts$API_KEY')
  }
}
