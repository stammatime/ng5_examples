import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  gameOn: boolean = false;
  tickNum: number = 0;
  interval;
  @Output("score") scoreEvent = new EventEmitter<number>(); 

  constructor() { }

  ngOnInit() {
  }


  startGame(){
    this.gameOn = true;
    //have to use es6 arrow function here to get proper use of "this"
    this.interval = setInterval(() => {
      this.scoreEvent.emit(this.tickNum + 1);
      this.tickNum++;
    },500);

  }
  
  endGame(){
    this.gameOn = false;
    clearInterval(this.interval);
    this.tickNum = 0;
  }

}
