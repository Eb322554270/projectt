import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parse } from 'querystring';
import { AddinvitedComponent } from '../addinvited/addinvited.component';
import { customer } from '../class/customer';
import { finalplace } from '../class/finalplace';
import { Invited } from '../class/Invited';
import { placepaires } from '../class/place-pairs';
import { dbService } from '../db.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

 
  arr:placepaires[]=[];
  constructor(private db:dbService,private route:Router) {



  }

  ngOnInit() {
    
  }

  view_all_invetedcustomer(){
    this.route.navigate(['entry/listevent/customer/Invited'])
 
  }

  CreateMap(){
    this.route.navigate(['entry/listevent/customer/maphall'])
  }

 
  placeinvited(){
    this.route.navigate(['entry/listevent/customer/place-invited'])

  }

  sendemail(){
 alert("אנא המתן הפעולה מתבצעת....")
    this.db.sendemail(this.db.i).subscribe(x=>
      alert("the mail send")

    )
  }
  View_Scheduling(){
    this.route.navigate(['entry/listevent/customer/finalschduling'])
  }

}














  



