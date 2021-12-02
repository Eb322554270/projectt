import { Component, OnInit } from '@angular/core';
import { elementEnd } from '@angular/core/src/render3';
import { Router } from '@angular/router';
import { dict } from '../class/dict';
import { point } from '../class/point';
import { dbService } from '../db.service';

@Component({
  selector: 'app-maphall',
  templateUrl: './maphall.component.html',
  styleUrls: ['./maphall.component.css']
})

export class MaphallComponent implements OnInit {
arr:number[]=[10];
access:number=0;
table:boolean=false;
x:number;
flg:Boolean=false;
y:number;
i:number;
arrArea:dict[]=[];
point1:point;
elementId:string;
  constructor(private db:dbService,private route:Router) { }

  ngOnInit() {
  }

  func(i:number){
    return new Array(i);
  }


  onDragEnded(event) {
   
    let element = event.source.getRootElement();
    let boundingClientRect = element.getBoundingClientRect();
     this.point1=new point(boundingClientRect.x,boundingClientRect.y);
     this.elementId=element.id;
     if(element.id!=1&&element.id!=2&&element.id!=3&&element.id!=4&&element.id!=5)
     {
       this.table=true;
    }


  else{
  alert(boundingClientRect.x+ "   "+ boundingClientRect.y)
  for (let index = 0; index < this.arrArea.length; index++) {

  if(this.arrArea[index].id==element.id)
  {
  this.arrArea[index]=new dict(this.db.currentevent.id_event,element.id,new point(this.point1.x,this.point1.y),0);
  this.flg=true;
  break;
  }
} 
if(this.flg==false){
 this.arrArea.push(new dict(this.db.currentevent.id_event,element.id,this.point1,0));
}
     this.flg=false;

  }
  
}
 
  save(){
    this.db.addpoint(this.arrArea).subscribe(x=>{
        alert("add the points")
      })

  }
  addTable(){
    this.table=false;
    this.access=0;
    for (let index = 0; index < this.arrArea.length; index++) {

      if(this.arrArea[index].id==this.elementId)
  {
    this.arrArea[index]=new dict(this.db.currentevent.id_event,this.elementId,new point(this.point1.x,this.point1.y),this.access);
    this.flg=true;
    break;
  }
    } 
  if(this.flg==false){  
   this.arrArea.push(new dict(this.db.currentevent.id_event,this.elementId,this.point1,this.access));
  }
  
     this.flg=false;
  
  }
}
