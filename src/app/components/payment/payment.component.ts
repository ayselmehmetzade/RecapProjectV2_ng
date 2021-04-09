import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRental } from 'src/app/interfaces/rental';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  paymentForm: FormGroup;
  @Input() rentForPayment : IRental;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.creatForm();
  }
  creatForm(){
    this.paymentForm= this.formBuilder.group({
      customerId:["",Validators.required],
      fullName:["",Validators.required],
      expiryDate:["",Validators.required],
      cardNumber:["",Validators.required],
      cvc:["",Validators.required],
    });
  }

}
