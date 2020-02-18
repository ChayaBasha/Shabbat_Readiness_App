import { Component } from '@angular/core';

import { tasks } from '../tasks';

@Component({
  selector: 'app-shabbat-alert',
  templateUrl: './shabbat-alert.component.html',
  styleUrls: ['./shabbat-alert.component.css']
})
export class ShabbatAlertComponent {
  tasks = tasks;

  share() {
    window.alert('The task has been shared!');
  }
}
