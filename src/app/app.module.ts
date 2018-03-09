import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }      from '@angular/http';
import {TddataService} from './/tddata.service'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Test01Component } from './test01/test01.component';
import { Test02Component } from './test02/test02.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeightDecoratorDirective } from './height-decorator.directive';
import { LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Test01Component,
    Test02Component,
    HeaderComponent,
    FooterComponent,
    HeightDecoratorDirective
  ],
  imports: [
    BrowserModule,
	HttpModule,
    AppRoutingModule
  ],
  providers:[TddataService],
  bootstrap: [AppComponent]
})
export class AppModule { 
	
}
