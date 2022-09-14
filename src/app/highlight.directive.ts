import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private _elementref: ElementRef) {
    this._elementref.nativeElement.style.color='yellow';
   }

}
