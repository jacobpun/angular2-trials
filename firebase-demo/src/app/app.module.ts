import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule} from 'angularfire2'

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyCJ4j5DL9tPQXSNFoOjSoN-USgKn5pqsq0",
    authDomain: "fir-demo-4341e.firebaseapp.com",
    databaseURL: "https://fir-demo-4341e.firebaseio.com",
    storageBucket: "fir-demo-4341e.appspot.com",
    messagingSenderId: "257119314371"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
