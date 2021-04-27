import { Component, OnInit, DoCheck } from '@angular/core';
import { ClientService } from './services/client.service';
import { CommerceService } from './services/commerce.service';
import { global } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClientService, CommerceService]
})
export class AppComponent implements OnInit, DoCheck {
  title = 'citas-online';
  public identity;
  public token;
  public url;
  public role;
  public date = new Date().getFullYear();


  constructor(
    private _clientService: ClientService,
    private _commerceService: CommerceService,
  ) {
    this.loadAccount();
  }

  ngOnInit() {
    this.loadAccount();
  }

  ngDoCheck() {
    this.loadAccount();
    if (this.identity) {
      this.url = global.url + this.role + this.identity.image;
    }
  }

  loadAccount() {
    if (this._clientService.getIdentity() && this._clientService.getIdentity().role == "ROLE_CLIENT") {
      this.identity = this._clientService.getIdentity();
      this.token = this._clientService.getToken();
      this.role = 'client/avatar/';
    } else if (this._commerceService.getIdentity() && this._commerceService.getIdentity().role == "ROLE_COMMERCE") {
      this.identity = this._commerceService.getIdentity();
      this.token = this._commerceService.getToken();
      this.role = 'commerce/avatar/';
    } else {
      this.token = null;
      this.role = null;
      this.identity = 'null';
    }
  }

  public sidebarActive(active) {
    const sidebar = document.querySelector('#sidebar');
    if (sidebar.className != active) {
      sidebar.className = active;
     
    } else {
      sidebar.className = '';
    }

  }
}
