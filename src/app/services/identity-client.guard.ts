import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {ClientService} from './client.service';

@Injectable()
export class IdentityGuardClient implements CanActivate{

	constructor(
		private _router: Router,
		private _ClientService: ClientService,
	
	){}

	canActivate(){
		let identityClient   = this._ClientService.getIdentity();

		if(identityClient){
			return true;
		}else{
			this._router.navigate(['/error']);
			return false;
		}
	}
}