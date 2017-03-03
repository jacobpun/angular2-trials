import { Component } from '@angular/core';
import * as linkify from 'linkifyjs';
import linkifyHtml from 'linkifyjs/html';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    this.title = linkifyHtml('Please refer http://www.foo.com/path/to/file or www.bar.com/path/to/file', 
      {
        className: '',
        format: {
          url: function (value) {
            return "Click Here";
          }
        }
      }
    );    
  }
}