import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'; //default  
  @Input() defaultColor: string = 'aquamarine';
  @Input() highlightColor: string = 'blue';
  constructor(private rendererer: Renderer2, private elementRef: ElementRef) { }
  
  ngOnInit(): void {
    console.log('in BetterHighlightDirective');
    // this.rendererer.setStyle(
    //   this.elementRef.nativeElement, 
    //   'background-color',
    //   'red'
    //   );
  }

  //the mouseenter is one of the events supported
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.rendererer.setStyle(
    //   this.elementRef.nativeElement, 
    //   'background-color',
    //   'red'
    //   );      
      this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.rendererer.setStyle(
    //   this.elementRef.nativeElement, 
    //   'background-color',
    //   'lightcoral'
    //   );      
    this.backgroundColor = this.defaultColor;
  }

}
