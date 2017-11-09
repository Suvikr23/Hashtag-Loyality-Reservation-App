import { Component, OnInit } from '@angular/core';

import { DateTimePickerDirective } from 'ng2-eonasdan-datetimepicker/src/datetimepicker.directive';
// import datetimepicker from 'eonasdan-bootstrap-datetimepicker';
import moment from 'moment/src/moment';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: [
    './reservation.component.css',
    '../../../node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css']
})
export class ReservationComponent implements OnInit {
  date : moment.Moment;

  constructor() {
  }

  ngOnInit() {

  }

  getCalendar() {

  }

  dateChange(date) {
    this.date = date;
  }

  dateClick() {
    console.log('click click!')
  }

}
