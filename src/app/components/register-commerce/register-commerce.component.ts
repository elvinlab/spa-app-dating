import { Component, OnInit } from '@angular/core';
import { Commerce } from '../../models/commerce';
import { CommerceService } from '../../services/commerce.service';

@Component({
  selector: 'app-register-commerce',
  templateUrl: './register-commerce.component.html',
  styleUrls: ['./register-commerce.component.css'],
  providers: [CommerceService]
})
export class RegisterCommerceComponent implements OnInit {

  public page_title: string;
  public commerce: Commerce;
  public status: string;
  public msg: string;

  constructor(
    private _commerceService: CommerceService
  ){
    this.page_title = "Registrate como Comercio"
    this.commerce = new Commerce("", "", "", "",  "", "ROLE_COMMERCE", "", "", "", "", "", "");
  }

  ngOnInit() {
  }

  public froala_options: Object = {
    charCounterCount: true,
    language: 'es',
    toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat'],
    toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat'],
    toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat'],
    toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat'],
  };

  onSubmit(form){
    
    this._commerceService.register(this.commerce).subscribe(
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
