import { Component, OnInit } from '@angular/core';

import { table } from '../objects/table';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  isEditView: boolean = false;
  editClicked: boolean = false;
  selectedTable: table;
  tablesList: table[] = [];

  constructor() { }

  ngOnInit() {
  }

  showTableDetails(event, clickedItem) {
    if (this.selectedTable === undefined || this.selectedTable === clickedItem) {
      this.isEditView = !this.isEditView;
    }
    this.selectedTable = clickedItem;
  }

  addTable(num, sec, cap) {
    var newTable: table = {
      tableNumber: num,
      section: sec,
      capacity: cap
    }

    this.tablesList.push(newTable);
  }

  editTable() {
    this.editClicked = true;
  }

  saveTable() {
    this.editClicked = false;
  }

}
