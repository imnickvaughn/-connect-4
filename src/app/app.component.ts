import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public translateExp = 'translateX(0px)';


  hover(column) {
    this.translateExp = `translateX(${column}px)`;
  }
}
