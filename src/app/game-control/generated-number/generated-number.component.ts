import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-generated-number',
  templateUrl: './generated-number.component.html',
  styleUrls: ['./generated-number.component.css']
})
export class GeneratedNumberComponent implements OnInit, OnDestroy {

  @Input('value') value: number;
  @ViewChild('customizable', {static: true}) customizableDiv;

  divClass: string;
  type: string;

  constructor() { }


  ngOnDestroy(): void {
    console.log("Destroying component with value " + this.value);
  }

  ngOnInit(): void {
    if(this.value % 2 === 0) {
      this.divClass = "alert-info";
      this.type = "even";
    } else {
      this.divClass = "alert-warning";
      this.type = "odd";
    }
  }

}
