import { point } from "./point";

export class dict{
    numEvent:number;
    id:string;
    p:point;
access:number;
    
    constructor(i:number,id:string,p:point,access:number){
      this.numEvent=i;
      this.id=id;
      this.p=p;
      this.access=access;
    }
  }