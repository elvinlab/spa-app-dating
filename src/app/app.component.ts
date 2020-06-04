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
    if(this.identity){
      this.url = global.url + this.role + this.identity.image;
    }
  }

  loadAccount() {
    if (this._clientService.getIdentity()) {
      if (this._clientService.getIdentity().role == "ROLE_CLIENT") {
        this.identity = this._clientService.getIdentity();
        this.token = this._clientService.getToken();
        this.role = 'client/avatar/';
      } else {
        this.identity = this._commerceService.getIdentity();
        this.token = this._commerceService.getToken();
        this.role = 'commerce/avatar/';
      }
    } else {
      this.identity = null;
      this.token = null;
    }
   
  }

}
