export class Notes {
    id: number;
    title: string;
    createDate: Date;
    status: Number;
    constructor(nid:number, ntitle:string, ncreateddate:Date, nstatus:number)
    {
        this.id=nid;
        this.title=ntitle;
        this.createDate=ncreateddate;
        this.status=nstatus;
    }

}
