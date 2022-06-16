import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-struct-directive',
  templateUrl: './custom-struct-directive.component.html',
  styleUrls: ['./custom-struct-directive.component.css']
})
export class CustomStructDirectiveComponent implements OnInit {

  condition: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleCondition() {
    this.condition = !this.condition;
  }

}
