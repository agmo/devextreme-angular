import { Component } from '@angular/core';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  accordionData = [{
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1986,
    phone: '(555)555-5555',
    email: 'John.Smith@example.com',
    city: 'San Francisco'
  }, {
    firstName: 'Rod',
    lastName: 'White',
    birthYear: 1990,
    phone: '(555)555-5555',
    email: 'Rod.White@example.com',
    city: 'San Francisco'
  }, {
    firstName: 'Lenny',
    lastName: 'Smith',
    birthYear: 1986,
    phone: '(555)555-5555',
    email: 'Lenny.Smith@example.com',
    city: 'San Francisco'
  }];

  tabs = [{
    title: 'Tab 1'
  }, {
    title: 'Tab 2'
  }, {
    title: 'Tab 3'
  }];

  constructor() {}

  expandAll(e) {
    for (let i = 0; i < this.accordionData.length; i++) {
      e.component.expandItem(i);
    }
  }
}
