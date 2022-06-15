import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private rendererer: Renderer2, private elementRef: ElementRef) { }
  
  ngOnInit(): void {
    console.log('in BetterHighlightDirective');
    this.rendererer.setStyle(
      this.elementRef.nativeElement, 
      'background-color',
      'red'
      );
  }

}
