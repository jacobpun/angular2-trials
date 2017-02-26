import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { NgRedux, NgReduxModule, DevToolsExtension} from 'ng2-redux'
import { IAppState, appReducer, INITIAL_STORE} from './store';
import { ItemSummaryComponent } from './item-summary/item-summary.component'

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ItemSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    var enhancers = isDevMode() ? [devTools.enhancer()]:[];
    ngRedux.configureStore(appReducer, INITIAL_STORE, [], enhancers)
  }
}