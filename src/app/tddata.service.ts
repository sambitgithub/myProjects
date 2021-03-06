import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';

@Injectable()
export class TddataService {
	constructor(private http:Http) {
	}
	getTdData():Observable<any> {
		return this.http.get(`assets/data.json`)
      .map((res: any) => res.json());
	  
	}

}
