import { Directive } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: "[heightDecorator]"
})
export class HeightDecoratorDirective {

  constructor(private elref: ElementRef ,private renderer: Renderer2) {
   renderer.setStyle(elref.nativeElement,'width', '250px');
  }

}
