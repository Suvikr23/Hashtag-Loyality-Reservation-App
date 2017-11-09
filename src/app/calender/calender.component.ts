import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  dateArray: string[];
  dayInfo: any;
  dateInfo: any;

  constructor() { 
    var dateAndTimeInfo = new Date();
    this.dateArray = dateAndTimeInfo.toString().split(' ');
    this.dayInfo = this.dateArray[0];
    this.dateInfo = this.dateArray[1]+' / '+this.dateArray[2]+' / '+this.dateArray[3];
  }

  ngOnInit() {
  }

}
