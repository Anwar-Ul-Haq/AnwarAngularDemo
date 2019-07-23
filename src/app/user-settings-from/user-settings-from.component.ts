import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-from',
  templateUrl: './user-settings-from.component.html',
  styleUrls: ['./user-settings-from.component.css']
})
export class UserSettingsFromComponent implements OnInit {

  originaluserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle : null,
    subscriptionType: null,
    notes: null
  };

  userSettings: UserSettings = {...this.originaluserSettings};


  constructor() { }

  ngOnInit() {
  }

}
