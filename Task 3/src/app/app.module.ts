import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlarmclockComponent } from './alarmclock/alarmclock.component';
import { AlarmTimerService } from './services/alarm-timer';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AlarmclockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AlarmTimerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
