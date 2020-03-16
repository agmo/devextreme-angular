import { Injectable } from '@angular/core';
import { DxScrollViewComponent } from 'devextreme-angular';

@Injectable({
  providedIn: 'root'
})
export class ContentScrollViewService {
  private scrollView: DxScrollViewComponent;
  private scrollOffsetTop: number;

  constructor() { }

  setScrollView(scrollView) {
    this.scrollView = scrollView;
  }

  getScrollView() {
    return this.scrollView;
  }

  setScrollOffsetTop(offset: number) {
    this.scrollOffsetTop = offset;
  }

  getScrollOffsetTop() {
    return this.scrollOffsetTop;
  }
}
