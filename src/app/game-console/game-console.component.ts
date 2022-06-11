import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-console',
  templateUrl: './game-console.component.html',
  styleUrls: ['./game-console.component.css']
})
export class GameConsoleComponent implements OnInit {

  numbers: number[] = [];

  @ViewChild('maxNumbers') maxNumberInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onNumberGenerated(generatedNumber: number) {
    let maxNumber: number = this.maxNumberInput.nativeElement.value;
    if(maxNumber>0 && this.numbers.length >= maxNumber) {
      console.log("Max numbers "+ maxNumber +" reached, no numbers will be added")  
    } else {
      this.numbers.push(generatedNumber);
    }
  
  }

  onGameStopped() {
    this.numbers = [];
  }

}
