import { Injectable, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class AlarmFormGroup{
    alarmFormGroup = new FormGroup({
        inputSecControl: new FormControl('', [
            Validators.required,
            Validators.pattern('^[0-9]+$')
        ])
    })
}