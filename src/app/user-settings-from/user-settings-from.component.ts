import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-from',
  templateUrl: './user-settings-from.component.html',
  styleUrls: ['./user-settings-from.component.css']
})
export class UserSettingsFromComponent implements OnInit {

  originaluserSettings: UserSettings = {
    name: 'Anwar Ul-Haq',
    emailOffers: true,
    interfaceStyle : 'Dark',
    subscriptionType: 'Annual',
    notes: 'here are some notes..'
  };

  userSettings: UserSettings = {...this.originaluserSettings};


  constructor() { }

  ngOnInit() {
  }

}
