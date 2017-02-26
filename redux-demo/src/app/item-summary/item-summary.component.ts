import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';

@Component({
  selector: 'app-item-summary',
  templateUrl: './item-summary.component.html'
})
export class ItemSummaryComponent implements OnInit {

  @select() private countOfItems;
  @select() private lastUpdatedDate;

  constructor() { }

  ngOnInit() {
  }

}