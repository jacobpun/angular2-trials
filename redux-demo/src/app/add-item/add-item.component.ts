import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgRedux, NgReduxModule} from 'ng2-redux'
import { IAppState } from '../store'
import { ADD_ITEM, REMOVE_ITEM } from '../actions'
 import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html'
})
export class AddItemComponent implements OnInit, OnDestroy {
  private currentItem = "";
  private items: string[] = [];
  private subscription: any = null;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.subscription = this.ngRedux.subscribe (
      () => {
        var store = this.ngRedux.getState();
        this.items = store.items; 
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();  
  }

  addItem() {
    this.ngRedux.dispatch(
      {
        type: ADD_ITEM,
        payload: this.currentItem
      }
    );

    this.currentItem ="";
  }

  removeItem(item: string) {
    this.ngRedux.dispatch(
      {
        type: REMOVE_ITEM,
        payload: item
      }
    );    
  }
}