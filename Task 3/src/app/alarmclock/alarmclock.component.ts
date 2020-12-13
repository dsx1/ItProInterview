import { Component } from '@angular/core';
import { AlarmFormGroup } from '../models/form.model';
import { AlarmTimerService } from '../services/alarm-timer';

@Component({
  selector: 'app-alarmclock',
  templateUrl: './alarmclock.component.html',
  styleUrls: ['./alarmclock.component.css']
})
export class AlarmclockComponent {
  form: AlarmFormGroup = new AlarmFormGroup();

  constructor(public timer: AlarmTimerService) { }
    
}
