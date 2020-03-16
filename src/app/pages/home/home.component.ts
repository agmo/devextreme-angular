import { Component, OnInit } from '@angular/core';
import { ContentScrollViewService } from '../../shared/services/content-scroll-view.service';
import { DxScrollViewComponent } from 'devextreme-angular';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent implements OnInit {
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

  private contentScrollView: DxScrollViewComponent;

  constructor(private contentScrollViewService: ContentScrollViewService) {}

  ngOnInit(): void {
    this.contentScrollView = this.contentScrollViewService.getScrollView();
  }

  expandAll(e) {
    for (let i = 0; i < this.accordionData.length; i++) {
      e.component.expandItem(i);
    }
  }

  fixScrollPosition() {
    const offset = this.contentScrollViewService.getScrollOffsetTop();
    this.contentScrollView.instance.scrollTo(offset);
  }
}
