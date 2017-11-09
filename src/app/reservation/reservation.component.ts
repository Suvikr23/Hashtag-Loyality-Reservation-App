import { Component, OnInit } from '@angular/core';

import { DateTimePickerDirective } from 'ng2-eonasdan-datetimepicker/src/datetimepicker.directive';
// import datetimepicker from 'eonasdan-bootstrap-datetimepicker';
import moment from 'moment/src/moment';

import { reservations } from '../objects/reservations'; 

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: [
    './reservation.component.css',
    '../../../node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css']
})
export class ReservationComponent implements OnInit {
  reservationList : reservations[];
  customerName: string = null;
  customerMobile: string = null;
  customerEmail: string = null;
  tableNum: number;
  guestCount: number;
  resTags : string[] = ['Birthday', 'Anniversary', 'A la carte / Buffet', 'Zomato / Dineout', 
                        'Outside Requested', 'Indoor Requested', 'Window Requested', 'Smoking Area'];
  tags: any;
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

  addReservation() {
    // var newRes: reservations = {
    //   // date: string;
    //   // time: string;
    //   guestName: this.customerName,
    //   emailId: this.customerEmail,
    //   mobileNumber: this.customerMobile,
    //   guestCount: this.guestCount,
    //   tableNumber: this.tableNum,
    //   tags : string[];
    // }

    // this.reservationList.push(newRes);
  }

}
