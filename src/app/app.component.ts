import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-todo-app';

  constructor(
    private _overlayContainer: OverlayContainer,
  ) {
    this._overlayContainer.getContainerElement().classList.add('dark-theme');
  }
}
