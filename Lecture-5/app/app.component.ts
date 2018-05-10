import { Component, OnInit } from '@angular/core';
import {ApiService} from './api.service';
import {Api} from './Config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  authorList: object[];
  constructor(private api: ApiService) {
    this.authorList = [];
  }
  ngOnInit() {
    this.api.getData()
      .subscribe((event: any) => {
         console.log(this.authorList);
         this.authorList = event;
         console.log(this.authorList);
      });
  }
  send(title, author) {
    const data: Api = {
      title: title,
      author: author
    };
    this.api.postData(data)
      .subscribe((event) => {
         console.log(event);
      });
  }
  update(value, id) {
    console.log(value, id);
    const data: Api = {
      title: 'title',
      author: value
    };
    this.api.update(data, id)
      .subscribe((event) => {
         console.log(event)
        this.authorList[id].author = event.author;
         console.log(this.authorList[(id)]);
      });
  }
}
