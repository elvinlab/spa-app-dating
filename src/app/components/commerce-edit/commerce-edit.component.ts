import { Component, OnInit } from '@angular/core';
import { Commerce } from '../../models/commerce';
import { CommerceService } from '../../services/commerce.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-commerce-edit',
  templateUrl: './commerce-edit.component.html',
  styleUrls: ['./commerce-edit.component.css'],
  providers: [CommerceService]
})
export class CommerceEditComponent implements OnInit {

  public page_title: string;
  public commerce: Commerce;
  public identity;
  public token;
  public status;
  public url;

  public froala_options: Object = {
    charCounterCount: true,
    language: 'es',
    toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat'],
    toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat'],
    toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat'],
    toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat'],
  };

  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI: {
      url: global.url + 'commerce/upload',
      headers: {
        "Authorization": this._commerceService.getToken()
      }
    },

    theme: "attachPin",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen de comercio',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  constructor(
    private _commerceService: CommerceService
  ) {
    this.page_title = 'Ajustes de comercio';
    this.commerce = new Commerce("", "", "", "", "", "ROLE_COMMERCE", "", "", "", "", "", "");
    this.identity = this._commerceService.getIdentity();
    this.token = this._commerceService.getToken();
    this.url = global.url;

    // Rellenar objeto commercee
    this.commerce = new Commerce(
      this.identity.id,
      this.identity.email,
      this.identity.password,
      this.identity.name_owner,
      this.identity.name_commerce,
      this.identity.role,
      this.identity.cell,
      this.identity.tell,
      this.identity.recovery_email,
      this.identity.description,
      this.identity.address,
      this.identity.image
    );
  }

  ngOnInit() {

  }

  onSubmit(form) {
    this._commerceService.update(this.token, this.commerce).subscribe(
      response => {
        if (response && response.status) {
          console.log(response);
          this.status = 'success';

          // Actualizar commercee en sesión

          if (response.changes.email) {
            this.commerce.email = response.changes.email;
          }
          if (response.changes.password) {
            this.commerce.password = response.changes.password;
          }

          if (response.changes.name_owner) {
            this.commerce.name_owner = response.changes.name_owner;
          }

          if (response.changes.name_commerce) {
            this.commerce.name_commerce = response.changes.name_commerce;
          }

          if (response.changes.role) {
            this.commerce.role = response.changes.role;
          }

          if (response.changes.cell) {
            this.commerce.cell = response.changes.cell;
          }

          if (response.changes.tell) {
            this.commerce.tell = response.changes.tell;
          }
          if (response.changes.recovery_email) {
            this.commerce.recovery_email = response.changes.recovery_email;
          }
          if (response.changes.description) {
            this.commerce.description = response.changes.description;
          }

          if (response.changes.address) {
            this.commerce.address = response.changes.address;
          }

          if (response.changes.image) {
            this.commerce.image = response.changes.image;
          }

          this.identity = this.commerce;
          localStorage.setItem('identity', JSON.stringify(this.identity));

        } else {
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );

  }

  avatarUpload(datos) {
    let data = JSON.parse(datos.response);
    this.commerce.image = data.image;
  }

}
