import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dbService } from '../db.service';
import { entryclass } from "src/app/class/entryclass";
import { customer } from '../class/customer';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  temp:entryclass=new entryclass();

  constructor(private db:dbService,private route:Router) { }

  ngOnInit() {
    
  }

check(){
this.db.ent.email=this.temp.email
this.db.ent.password=this.temp.password
this.temp.email= "  "
this.temp.password="  "
this.db.check_if_exist(this.db.ent).subscribe(x=>{
 if(x==null||this.temp.email==null||this.temp.password==null){
  alert("אחד מן הנתונים לא תקינים- נסה שוב")
  }

 else{
  this.db.disable=true;
  this.db.currentcustomer=<customer>x;
    this.route.navigate(['entry/listevent'])
  }


});


 }  



}
