export class Promotion {
    constructor(
        public id: number,
        public commerce_id: string,
        public coupon: string,
        public max: number,
        public amount: number,
        public expiry: any,
        public descripton: string,
        public image: string,
        public discount: number,
    ) { }
}
