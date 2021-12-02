import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalplace } from '../class/finalplace';
import { placepaires } from '../class/place-pairs';
import { dbService } from '../db.service';

@Component({
  selector: 'app-finalschduling',
  templateUrl: './finalschduling.component.html',
  styleUrls: ['./finalschduling.component.css']
})
export class FinalschdulingComponent implements OnInit {
  finallarr:finalplace[]=[];
  place1:placepaires;
  place2:placepaires;
  place3:placepaires;
  constructor(private db:dbService,private route:Router) { }

  ngOnInit() {
    this.db.GetScheduling(this.db.i).subscribe(x=>{
    this.finallarr=<finalplace[]>x;

   })
  }




}
