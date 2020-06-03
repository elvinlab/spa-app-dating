import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {ClientService} from './client.service';

@Injectable()
export class IdentityGuard implements CanActivate{

	constructor(
		private _router: Router,
		private _ClientService: ClientService
	){}

	canActivate(){
		let identity = this._ClientService.getIdentity();

		if(identity){
			return true;
		}else{
			this._router.navigate(['/error']);
			return false;
		}

	}
}