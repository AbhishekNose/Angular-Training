import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<p>WARNING: Imminent danger...</p>',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
