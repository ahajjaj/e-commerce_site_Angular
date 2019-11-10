import { Component } from '@angular/core';

@Component({
  selector: newFunction(),
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ='SUPERVENTES';
}
function newFunction(): string {
  return 'app-root';
}

