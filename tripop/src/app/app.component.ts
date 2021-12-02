import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { customer } from './class/customer';
import { dbService } from './db.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit
{
  constructor(private db:dbService,private route:Router){}
    
  ngOnInit(): void { }
   
  LogOut(){
    this.db.currentcustomer= new customer();
    this.db.disable= false;
    this.db.flag= true;

  }  
   
  LogIn(){
    this.db.flag= false;
  }

  home(){
    this.route.navigate(['pagehome'])
  }
  about(){
    this.db.flag=false;
  }
}
 
    

 


