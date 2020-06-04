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

  constructor(
    private _clientService: ClientService,
    private _commerceService: CommerceService,
  ) {
    this.loadAccount();
    this.url = global.url + 'client/avatar/' + this.identity.image;
  }

  ngOnInit() {
    console.log('Webapp cargada correctamente :)');
  }

  ngDoCheck() {
    this.loadAccount();
    this.url = global.url + 'client/avatar/' + this.identity.image;
  }

  loadAccount() {
    if (this._clientService.getIdentity()) {
      if (this._clientService.getIdentity().role == "ROLE_CLIENT") {
        this.identity = this._clientService.getIdentity();
        this.token = this._clientService.getToken();
      } else {
        this.identity = this._commerceService.getIdentity();
        this.token = this._commerceService.getToken();
      }
    } else {
      this.identity = null;
      this.token = null;
    }
   
  }

}
