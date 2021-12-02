import { Component, OnInit } from '@angular/core';
import { Invited } from '../class/Invited';
import { dbService } from '../db.service';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-addinvited',
  templateUrl: './addinvited.component.html',
  styleUrls: ['./addinvited.component.css']
})
export class AddinvitedComponent implements OnInit {
  a:Invited=new Invited();

  constructor(private db:dbService,@Inject(MAT_DIALOG_DATA) public data: any,private route:Router) {

   }
  ngOnInit() {
    console.log(this.data)
    this.a.fname_Invited=this.data.invited1.fname_Invited;
    this.a.lname_Invited=this.data.invited1.lname_Invited;
    this.a.email_Invited=this.data.invited1.email_Invited;
    this.a.password_Invited=this.data.invited1.password_Invited;
    this.a.id_Invited=this.data.invited1.id_Invited;
  
  }
  
    

  addInvitedd(){
    
    this.a.id_event=this.db.currentevent.id_event;
    this.db.addInvited(this.a).subscribe(x=>{
      alert("Invited update");
      this.route.navigate(['entry/listevent/customer/Invited'])
    });
    
  }

}


