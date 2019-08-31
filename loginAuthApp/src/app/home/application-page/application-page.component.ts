import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-application-page',
  templateUrl: './application-page.component.html',
  styleUrls: ['./application-page.component.css']
})
export class ApplicationPageComponent implements OnInit {
  name: string;
  constructor(private dataStore: DataStoreService) { }

  ngOnInit() {
    this.name = this.dataStore.userData['email'];
  }

}
