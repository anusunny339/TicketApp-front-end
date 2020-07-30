export class BookingModel{
    constructor(
        public _id:string,
        public movieName:string,
        public time:string,
        public seats:number,
        public amount:number,
        public userId:string
    ){}
}
