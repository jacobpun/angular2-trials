import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  private cuisines = [];
  private subscription;

  constructor(private angularFire: AngularFire) {
  }

  ngOnInit() {
    this.subscription = this.angularFire.database.list('/cuisines').subscribe(
      c => {
        this.cuisines = c
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
