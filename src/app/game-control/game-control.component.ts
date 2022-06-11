import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output('numberGenerated') newNumberGenerated = new EventEmitter<number>();  

  @Output('gameStoppedOutput') gameStopped = new EventEmitter;

  numberGeneratorInterval;

  constructor() { }

  ngOnInit(): void {
    
  }

  onGameStart() {
    this.numberGeneratorInterval = setInterval(() => {
      this.newNumberGenerated.emit(this.getRandomInt(100)) 
    }, 1000);
    console.log(this.numberGeneratorInterval);  
  }

  onGameStop() {
    if(this.numberGeneratorInterval) {
      clearInterval(this.numberGeneratorInterval);
    }
    this.gameStopped.emit();
  }
  
  /**
   * Generated a ranodm number between 0 and max
   * @param max 
   * @returns 
   */
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

}
