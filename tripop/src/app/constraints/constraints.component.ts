import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dbService } from '../db.service';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { category } from '../class/category';
import { relation } from '../class/relation';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ElementRef } from "@angular/core";
import { constraintsinvited } from '../class/constraintsinvited';


@Component({
  selector: 'app-constraints',
  templateUrl: './constraints.component.html',
  styleUrls: ['./constraints.component.css']
  
})
export class ConstraintsComponent implements OnInit {

  call3= new FormControl('', [Validators.required, Validators.pattern("[1-9]*"),Validators.maxLength(3)]);
  password:number;
  con:boolean=true;
  arr:category[]=[];
  arr2:category[]=[];
  arr3:category[]=[];
  arr4:category[]=[];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  choose:boolean=false;
  id_invited:number;
  arrconstraints:constraintsinvited[]=[];
  id_con:Number;
  flag:boolean=false;

  constructor(private db:dbService,private route:Router,private _formBuilder: FormBuilder,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
    this.password = params['event'];
    this.id_invited = params['id_invited'];
    this.db.flag=false;
  
      // console.log(date); // Print the parameter to the console. 
  });


  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.db.Get_category().subscribe(x=>{
      this.arr=<category[]>x;
      for (let index = 2,index1=0; index < this.arr.length; index++,index1++) {
        this.arr4[index1]=this.arr[index];
        
      }
      this.arr3[0]=this.arr[0];
      this.arr3[1]=this.arr[1];
     
    })
     
 this.db.Get_relation(1).subscribe(x=>{
         this.arr2=<category[]>x;})

  }

  add_Constraints(a:number){
 if(a==1||a==2){
   this.flag=true;
   this.choose=false;
   this.id_con=a;
   var e=new constraintsinvited();
   e.id_Invited=this.id_invited;
   e.id_Constraints=this.id_con;
   e.id_importance=4;
   this.arrconstraints[4]=e;
   
 }
 else
 {
   this.id_con=a;
   this.choose=true;
}
   
  
  }

 level(x:number){
   if(this.arrconstraints[x]){
     alert("בחר רמה אחרת -בחרת אילוץ ברמה זו");
   }
   else{
  
  var e=new constraintsinvited();
  e.id_Invited=this.id_invited;
  e.id_Constraints=this.id_con;
  e.id_importance=x;
  this.arrconstraints[x]=e;

}}
close(){
  this.choose=false;
}
 
 val(b:number){
 if(b==1){
this.con=false;

 }
 if(b==2){
this.con=true;
 }

 }
 

 if_no_come(){
   if(this.con==false){
  this.db.addconfirm(this.con,this.id_invited).subscribe(x=>{
    alert("confirm succesed")
  
  })
}
 }



 enterconstraints(){
  this.db.addconstraints(this.arrconstraints).subscribe(x=>{
 
  });

  this.db.addconfirm(this.con,this.id_invited).subscribe(x=>{
  })


 }

 getErrorMessage3() {
  if (this.call3.hasError('required')) {
    return 'שדה חובה *';
  }
  return this.call3.hasError('pattern') ? 'ערך לא תקין ' : '';
}

}


