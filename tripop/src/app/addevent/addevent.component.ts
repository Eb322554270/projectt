import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewEvent } from '../class/NewEvent';
import { Type_event } from '../class/Typa_event';
import { dbService } from '../db.service';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {

  call3= new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]);
  a:NewEvent=new NewEvent();
  typee:Type_event[]=[];
  centered = false;
  disabled = false;
  unbounded = false;
  radius: number;
  color: string;

  constructor(private db:dbService,private route:Router) {

  }
  ngOnInit() {
    this.db.Get_TypeEvent().subscribe(x=>{
    this.typee=<Type_event[]>x;})
  }
  
  addEvent(){
    alert(this.db.currentcustomer.id_customer)
    this.a.id_customer_event=this.db.currentcustomer.id_customer;
    this.db.addevent(this.a).subscribe(x=>{
      alert("event add");
    });
    
  }
  
  getErrorMessage3() {
    if (this.call3.hasError('required')) {
      return 'שדה חובה *';
    }
    return this.call3.hasError('pattern') ? 'ערך לא תקין ' : '';
  }

}
