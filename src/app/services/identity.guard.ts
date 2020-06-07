import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {ClientService} from './client.service';
import {CommerceService} from './commerce.service';

@Injectable()
export class IdentityGuard implements CanActivate{

	constructor(
		private _router: Router,
		private _ClientService: ClientService,
		private _CommerceService: CommerceService
	){}

	canActivate(){
		let identityClient   = this._ClientService.getIdentity();
		let identityCommerce = this._CommerceService.getIdentity();

		if(identityClient){
			return true;
		}else if(identityCommerce){
			return true;

		}else{
			this._router.navigate(['/error']);
			return false;
		}
	}
}