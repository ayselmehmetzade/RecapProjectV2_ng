export interface IRental {
    id?:number;
    carId:number;
    customerId:number;
    rentDate:Date;
    returnDate?:Date;
}
