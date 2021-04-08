export interface ICreditCard {
    id:number;
    customerId:number;
    fullName:string;
    cardNumber:string;
    expiryMonth:number;
    expiryYear:number;
    cvc:string;
    type:string;
}
