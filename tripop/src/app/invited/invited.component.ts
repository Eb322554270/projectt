import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invited } from '../class/Invited';
import { dbService } from '../db.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { constraintsinvited } from '../class/constraintsinvited';
import { category } from '../class/category';
import { curcon } from '../class/curcon';
import { finalplace } from '../class/finalplace';
import { AddinvitedComponent } from '../addinvited/addinvited.component';
import {MatDialog} from '@angular/material/dialog';
import { UpdateinvitedComponent } from '../updateinvited/updateinvited.component';

@Component({
  selector: 'app-invited',
  templateUrl: './invited.component.html',
  styleUrls: ['./invited.component.css']
})

export class InvitedComponent implements OnInit {
c:curcon[]=[];
  res:category[]=[];
  constraints:category[]=[];
  arr2:Invited[]=[];
  flag:Invited=null;
  options:string[]=[];
  arrcon:constraintsinvited[]=[];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  i:number=0;
  cn:boolean=false;
  messageSuccess:boolean=false;
  idd:number;
  
 
  constructor(private db:dbService,private route:Router,public dialog: MatDialog) {


   }

  ngOnInit() {
    this.db.GetInviteds_of_event(this.db.i).subscribe(x=>{
      this.arr2=<Invited[]>x;
       this.arr2.forEach(element => {
     this.options[this.i++]=element.fname_Invited+"  "+element.lname_Invited;
   });


   
       this.db.get_all_category().subscribe(x=>{
    this.constraints=<category[]>x;
  })
    })

   
   
  

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

     private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
    
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  
  detailsinvited(x:Invited){
    this.flag=x;
 
   }

   close(){
     //alert("close")
    this.cn=false;
    this.messageSuccess=false;
   }
   check(id:number){
    this.messageSuccess=true;
    this.idd=id;

   }

  //  setInvited(invited:Invited){
  //   this.route.navigate(['entry/listevent/customer/addinvited']);

  //  }


  addinvited()
  {
    // alert("addinvited")
   this.route.navigate(['entry/listevent/customer/Invited/updateinvited'])
  }

  openDialog(invited:Invited) {
   
    const dialogRef = this.dialog.open(AddinvitedComponent, {
      width: '100vw',
      height: '100vh',
      data: {
        invited1:invited
      } 
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



   DeleteInvited(idinvited:number){
    //this.messageSuccess=true;
    this.db.DeleteInvited(idinvited).subscribe(x=>{
      
      this.messageSuccess=false;
      this.db.GetInviteds_of_event(this.db.i).subscribe(x=>{
        this.arr2=<Invited[]>x;})
    })
  }



  
  
   get_constraints(id:number){
     this.cn=true;
    this.db.Getconstraints(id).subscribe(x=>{
      this.c=[];
      this.arrcon=<constraintsinvited[]>x;
       //this.c.length=this.arrcon.length;
    this.constraints.forEach(element => {
      this.arrcon.forEach(element1 => {
        if(element.id_Constraints==element1.id_Constraints)
      //  var a=new curcon();
      //  alert("jjjj")
      //  a.name=element.name_Constraints;
      //  alert(a.name)
      //  a.prio=element1.id_importance;
       this.c.push({name:element.name_Constraints,prio:element1.id_importance});
      });
     
    });
     //alert(this.c.length)


      // var res1=this.arrcon.map(x=>x.id_Constraints);
   
      //  this.res = this.constraints.filter(item => res1.includes(item.id_Constraints));
        
        //  alert(res1.length)
    




  })
       
     
}
}
