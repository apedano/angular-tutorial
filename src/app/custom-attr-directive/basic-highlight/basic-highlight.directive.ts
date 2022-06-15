import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]', //used as an attribute decorator
})
export class BasicHighlightDirective implements OnInit{
    //inject the hosting element in the constructor ElementRef
    constructor(private elementRef: ElementRef) {

    }

    ngOnInit() {
        //not a good practice to manipulate the element directly
        //better use a renderer
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }


}