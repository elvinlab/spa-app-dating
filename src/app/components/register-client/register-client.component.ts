import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})


export class RegisterClientComponent implements OnInit {
  public page_title: string;
  public client: Client;
  public status: string;

  constructor(
    private _clientService: ClientService
  ){
    this.page_title = "Registrate como cliente"
    this.client = new Client("", "", "", "",  "", "ROLE_CLIENT", "", "", "");
  }

  ngOnInit() {
  	console.log('Componente de registro lanzado!!');
    console.log(this._clientService.test());
  }

  onSubmit(form){
    
    this._clientService.register(this.client).subscribe(
      response => {

        if(response.status == "success"){
          this.status = response.status;
          form.reset();
        }else{
          this.status = 'error';
        }

      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
   
  }
}
