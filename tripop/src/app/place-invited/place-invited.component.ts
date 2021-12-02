import { visitValue } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalplace } from '../class/finalplace';
import { placepaires } from '../class/place-pairs';
import { point } from '../class/point';
import { dbService } from '../db.service';


@Component({
  selector: 'app-place-invited',
  templateUrl: './place-invited.component.html',
  styleUrls: ['./place-invited.component.css']
})
export class PlaceInvitedComponent implements OnInit {
flag:boolean=true;
messageSuccess:boolean=false;
arr:finalplace[]=[];
ch:boolean=false;
temp1:placepaires;
temp2:placepaires;
idx1:number;
idx:number;
indx:number;
indx1:number;

area:point[]=[];
constructor(private db:dbService,private route:Router) {

  }

  ngOnInit() {
   this.db.getAreaPoint().subscribe(x=>{
   this.area=<point[]>x;
   this.area.forEach(element => {
   if(element!=null){
      element.y-=150;

    }
  });
  alert(this.area[2].x+"  "+ this.area[2].y);
})
    this.db.Getpairs(this.db.i).subscribe(x=>{
      this.arr=<finalplace[]>x;

      this.arr.forEach(element => {
      if(element!=null)
      {
        element.point.y-=150;
      }  
      });
      
      if(this.arr.length==0){
       this.ch=true;
      }
     else {this.flag=false;
      
     setTimeout(()=>{              
      this.messageSuccess = true;
     }, 2000);
    }
  })

  }


  Save(){
    this.db.SavePair(this.arr).subscribe(x=>{
      alert("save")
    })
  }

  Repeat(){
    this.db.Getpairs(this.db.i).subscribe(x=>{
      this.arr=<finalplace[]>x;
      this.flag=false;
    })
  }
  close(){
    this.messageSuccess=false;
  }

  invited(){
    this.route.navigate(['entry/listevent/customer/Invited'])
  }

chng(invitedd:placepaires){
  if(this.temp1==null)
  {
    this.temp1=new placepaires();
    this.temp1.id_invited=invitedd.id_invited;
    this.temp1.id_place=invitedd.id_place;
    this.temp1.name_invite=invitedd.name_invite;
    this.temp1.num_place=invitedd.num_place;
  }
  else if(this.temp2==null){
    this.temp2=new placepaires();
    this.temp2.id_invited=invitedd.id_invited;
    this.temp2.id_place=invitedd.id_place;
    this.temp2.name_invite=invitedd.name_invite;
    this.temp2.num_place=invitedd.num_place;
  }

}


change(){
  alert(this.temp1.name_invite+" "+this.temp2.name_invite)
for (let index = 0; index < this.arr.length; index++) {
  for (let index1 = 0; index1 < this.arr[index].listfinally.length; index1++) {
    
      if(this.arr[index].listfinally[index1].id_invited==this.temp1.id_invited){
        this.idx=index;
        this.idx1=index1;
        
      }
      if(this.arr[index].listfinally[index1].id_invited==this.temp2.id_invited){
        this.indx=index;
        this.indx1=index1;
      }

  }
}

this.arr[this.idx].listfinally[this.idx1].id_invited=this.temp2.id_invited;
this.arr[this.idx].listfinally[this.idx1].name_invite=this.temp2.name_invite;
this.arr[this.indx].listfinally[this.indx1].id_invited=this.temp1.id_invited;
this.arr[this.indx].listfinally[this.indx1].name_invite=this.temp1.name_invite;
this.temp1=null;
this.temp2=null;

 } 
mm(){
  alert("בחר 2 מוזמנים שעליהם תתבצע ההחלפה");
}


}

