import { Component, OnInit } from '@angular/core';
import { Invited } from '../class/Invited';
import { dbService } from '../db.service';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateinvited',
  templateUrl: './updateinvited.component.html',
  styleUrls: ['./updateinvited.component.css']
})
export class UpdateinvitedComponent implements OnInit {
  a:Invited=new Invited();
  constructor(private db:dbService,private route:Router) {
  }

  ngOnInit() {
  
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'שדה חובה *';
    }

    return this.email.hasError('email') ? 'כתובת מייל לא תקינה' : '';
  }

  call2 = new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9]{8}")]);
  getErrorMessage2() {
    if (this.call2.hasError('required')) {
      return 'שדה חובה *';
    }
    return this.call2.hasError('pattern') ? 'סיסמא לא תקינה' : '';
  }

  addInvitedd(){
    this.a.id_event=this.db.currentevent.id_event;
    this.db.addInvited(this.a).subscribe(x=>{
      alert("Invited add");
     this.route.navigate(['entry/listevent/customer/Invited'])
    });
    
  }

}
