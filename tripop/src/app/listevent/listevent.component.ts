import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { event } from '../class/event';
import { dbService } from '../db.service';

@Component({
  selector: 'app-listevent',
  templateUrl: './listevent.component.html',
  styleUrls: ['./listevent.component.css']
})
export class ListeventComponent implements OnInit {
  arr3:event[]=[];
  constructor(private db:dbService,private route:Router) { }

  ngOnInit() {
    
    this.db.Get_event(this.db.currentcustomer.id_customer).subscribe(x=>{
      this.arr3=<event[]>x;
    })
  }

  save_num_event(x:event){
    this.db.currentevent=x;
    this.db.i=x.id_event;
    this.route.navigate(['entry/listevent/customer'])

    }

    addnewevent(){
      this.route.navigate(['entry/listevent/addevent'])
    }
}
