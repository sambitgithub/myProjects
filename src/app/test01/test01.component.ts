import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {TddataService} from '..//tddata.service'
import { Observable } from 'rxjs/Rx'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.scss']
})
export class Test01Component implements OnInit {

	data=[];
     constructor(private tdDataService:TddataService) {
		this.tdDataService.getTdData().subscribe(res => this.data = res);
    }

  ngOnInit() {
   
  } 
  

}
