import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {TddataService} from '..//tddata.service'
import { Observable } from 'rxjs/Rx'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Router} from "@angular/router";


@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.scss']
})
export class Test01Component implements OnInit {

	data=[];
     constructor(private tdDataService:TddataService,private router: Router) {
		this.tdDataService.getTdData().subscribe(res => this.data = res);
    }

  ngOnInit() {
   
  } 
  onClick() {
    this.router.navigateByUrl('/switch');
  }

}
