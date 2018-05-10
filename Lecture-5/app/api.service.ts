import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Api} from 'Config';

@Injectable()
export class ApiService {
  BASE_URL = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<Api>(this.BASE_URL);
  }

  postData(value: Api) {
     return this.http.post(this.BASE_URL, value);
  }
  update(value: Api, id: number) {
    return this.http.put(this.BASE_URL + '/' + (id + 1), value);
  }
}
