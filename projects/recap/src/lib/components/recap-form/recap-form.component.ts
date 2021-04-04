import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormModel } from '../../models/form.model';

@Component({
  selector: 'recap-form',
  templateUrl: './recap-form.component.html',
  styleUrls: ['./recap-form.component.scss']
})
export class RecapFormComponent implements OnInit {

  @Input() forms: IFormModel[] = [];
  @Input() formGroup: FormGroup;
  @Input() buttonLabel: string = "Save";

  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(){
    
  }

  sendData(){
    this.update.emit("dilara");
  }

}
