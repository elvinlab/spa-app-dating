import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {CommerceService} from './commerce.service';

@Injectable()
export class IdentityGuardCommerce implements CanActivate{

	constructor(
		private _router: Router,
		private _commerceService: CommerceService,
	
	){}

	canActivate(){
		let identityCommerce   = this._commerceService.getIdentity();

		if(identityCommerce){
			return true;
		}else{
			this._router.navigate(['/error']);
			return false;
		}
	}
}