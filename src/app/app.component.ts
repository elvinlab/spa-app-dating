import { Component, OnInit, DoCheck } from '@angular/core';
import { ClientService } from './services/client.service';
import { CommerceService } from './services/commerce.service';

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

  constructor(
    private _clientService: ClientService,
    private _commerceService: CommerceService,
  ) {
    this.loadAccount();
  }

  ngOnInit() {
    console.log('Webapp cargada correctamente :)');
  }

  ngDoCheck() {
    this.loadAccount();
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
