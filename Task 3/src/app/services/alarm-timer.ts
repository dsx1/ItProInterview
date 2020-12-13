import { Injectable } from '@angular/core';

@Injectable()
export class AlarmTimerService {

  seconds: number = 0;
  endOfTime: number;
  started: boolean = false;
  paused: boolean = false;
  interval: any;

  startTimer(){
    if (this.endOfTime >= 120) {
      this.endOfTime = 120;
    }
    this.paused=false;
    this.started = true;
    this.interval = setInterval(() => {
      this.seconds++;
      if (this.seconds == this.endOfTime){
        alert('*звон будильника*');
        clearInterval(this.interval);
        this.interval=null;
        this.started = false;
        this.seconds = 0;
        this.endOfTime  = null;
      }
    }, 1000);       
  }

  stopTimer(){
    this.started=false;
    this.paused = true;
    clearInterval(this.interval);
    this.interval=null;
  }
  
  
}