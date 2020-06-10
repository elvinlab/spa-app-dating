export class Appointment {
    constructor(
        public id: number,
        public client_id: string,
        public commerce_id: string,
        public service_id: number,
        public schedule_day: string,
        public schedule_hour: string,
        public status: string,
        //Quiza ocupe mostrar el createAt: any
    ) { }
}
