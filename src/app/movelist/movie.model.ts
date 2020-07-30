export class MovieModel{
    constructor(
        public _id:string,
        public name:string,
        public certificate:string,
        public language:string,
        public type:string,
        public duration:string,
        public director:string,
        public casting:string,
        public releaseDate:string,
        public description:string,
        public price:number,
        public seats1:number,
        public seats2:number,
        public seats3:number,
        public seats4:number,
        public time1:string,
        public time2:string,
        public time3:string,
        public time4:string,
        public imgUrl:string
    ){}
}
