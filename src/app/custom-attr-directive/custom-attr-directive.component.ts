import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-attr-directive',
  templateUrl: './custom-attr-directive.component.html',
  styleUrls: ['./custom-attr-directive.component.css']
})
export class CustomAttrDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2,4,6];
  onlyOdd = false;

}
