import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.scss']
})
export class ColorAddComponent implements OnInit {

  colorAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.colorAddForm= this.formBuilder.group({
      colorName:["",Validators.required]
    })
  }
  add(){
    let color = Object.assign({},this.colorAddForm.value);
    console.log(color);
    
  }
}
