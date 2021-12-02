import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { customer } from '../class/customer';
import { dbService } from '../db.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  call1 = new FormControl('', [Validators.required, Validators.pattern("[0-9]{3}[-][0-9]{7}")]);
  c:string;

  call2 = new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9]{8}")]);
  
  call3 = new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9]{8}")]);
  getErrorMessage3() {
    if (this.call2.hasError('required')) {
      return 'שדה חובה *';
    }
    return this.call2.hasError('pattern') ? 'סיסמא לא תקינה' : '';
  }
  a:customer=new customer();
  centered = false;
  disabled = false;
  unbounded = false;
  radius: number;
  color: string;

  constructor(private db:dbService,private route:Router) {
  }

  ngOnInit() {
  }


  addcustomer(){
    if(this.c!=this.a.password_customer){
       alert("no good")
    }
    else{  this.db.addCustomer(this.a).subscribe(x=>{
      alert("customer add");
      this.route.navigate(['entry/customer/addevent'])
    });
  }
  
    
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'שדה חובה *';
    }

    return this.email.hasError('email') ? 'כתובת מייל לא תקינה' : '';
  }

  getErrorMessage1() {
    if (this.call1.hasError('required')) {
      return 'שדה חובה*';
    }
    return this.call1.hasError('pattern') ? 'טלפון לא תקין' : '';
  }
  getErrorMessage2() {
    if (this.call2.hasError('required')) {
      return 'שדה חובה *';
    }
    return this.call2.hasError('pattern') ? 'סיסמא לא תקינה' : '';
  }
  
}
