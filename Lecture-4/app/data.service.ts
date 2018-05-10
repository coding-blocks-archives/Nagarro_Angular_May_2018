import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class DataService {
  BASE_URL = 'https://jsonplaceholder.typicode.com/posts/1';
  constructor(private http: HttpClient) { }

  getRequest() {
    return this.http.get(this.BASE_URL);
  }

}
