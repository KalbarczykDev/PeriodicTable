import { Component } from '@angular/core';
import { ElementTable } from './components/element-table/element-table';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ElementTable],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected title = 'periodic-table-app';
}
