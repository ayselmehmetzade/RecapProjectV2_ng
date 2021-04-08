import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  paymentForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.creatForm();
  }
  creatForm(){
    this.paymentForm= this.formBuilder.group({
      customerId:["",Validators.required],
      fullName:["",Validators.required],
      expiryMonth:["",Validators.required],
      expiryYear:["",Validators.required],
      cvc:["",Validators.required],
      type:["",Validators.required]
    });
  }

}
