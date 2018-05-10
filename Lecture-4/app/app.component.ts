import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from './data.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'app';
  message: string;
  @ViewChild('inp') inp;
  constructor(private data: DataService) {

  }
  ngOnInit() {
      this.data.getRequest()
        .subscribe((data) => {
           console.log(data);
        });
      console.log(this.inp);
    Observable.fromEvent(this.getNativeElement(this.inp), 'keyup')
        .filter((event: any) => event.shiftKey)
        .map((event: any) => event.target.value)
        .subscribe((event) => {
           this.message = event;
        });
  }
  getNativeElement(ele) {
    return ele.nativeElement;
  }

}
