import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IPayment } from 'src/app/interfaces/payment';
import { IRental } from 'src/app/interfaces/rental';
import { AuthService } from 'src/app/services/auth.service';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { CustomerService } from 'src/app/services/customer.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalDetailService } from 'src/app/services/rental-detail.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
   //
  creditCardForm: FormGroup;
  @Input() rentForPayment: IRental;
  payment: IPayment;
  customerId: number;
  checked: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private toastrService: ToastrService,
    private paymentService: PaymentService,
    private authService: AuthService,
    private creditCardService: CreditCardService,
    private rentService: RentalDetailService) { }

  ngOnInit(): void {
    this.creatForm();
  }
  creatForm() {
    this.creditCardForm = this.formBuilder.group({
      customerId: ["", Validators.required],
      fullName: ["", Validators.required],
      expiryDate: ["", Validators.required],
      cardNumber: ["", Validators.required],
      cvc: ["", Validators.required],
      check:[false]
    });
  }

  addPayment() {
    let id = this.authService.user.userId
    this.customerService.getByUserId(id).subscribe(response => {
      this.customerService.customer = response.data
      let payment: IPayment = {
        customerId: this.customerService.customer.customerId,
        creditCardNumber: this.creditCardForm.controls["cardNumber"].value,
        price: this.rentService.car.dailyPrice
      }
      this.paymentService.addItem(payment).subscribe(response => {
        this.toastrService.success("Başarılı")
        this.rentService.value.customerId = this.customerService.customer.customerId
        this.customerId = this.rentService.value.customerId;
        this.rentService.addItem(this.rentService.value).subscribe(response => {
          this.toastrService.success("kiralama başarılı")
        })
      })
      if (this.creditCardForm.controls["check"].value) {        
        let creditCardModel = Object.assign({}, this.creditCardForm.value);
        creditCardModel.customerId = this.customerService.customer.customerId;
        this.creditCardService.addItem(creditCardModel).subscribe(response => {
          this.toastrService.success("kredi kartı kaydetme başarılı")
        })
        this.rentService.isShow = false;
      }
    })
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
 

}
