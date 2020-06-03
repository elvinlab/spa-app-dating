import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  public Client: Client;

  constructor() {
    this.Client = new Client("", "", "", "",  "", "ROLE_CLIENT", "", "", "");
  }

  ngOnInit(): void {
  }
  onSubmit(form) {
    console.log(this.Client);
  }

}
