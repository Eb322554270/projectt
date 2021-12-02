import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { customer } from './class/customer';
import { Invited } from './class/Invited';
import { NewEvent } from './class/NewEvent';
import { entryclass } from "src/app/class/entryclass";
import { event } from './class/event';
import { constraintsinvited } from './class/constraintsinvited';
import { finalplace } from './class/finalplace';
import { placepaires } from './class/place-pairs';
import { point } from './class/point';
import { dict } from './class/dict';

@Injectable({
  providedIn: 'root'
})
export class dbService {
  i:number;
  ent:entryclass=new entryclass();
  currentevent:event=new event();
  currentcustomer:customer=new customer();
  disable:boolean=false;
  flag:boolean=true;
  constructor(private http:HttpClient) { }


    addInvited( a: Invited ){
    return this.http.post("/api/Invited", a);
    }
    GetInviteds_of_event(x: number){
    debugger;
      return this.http.get("/api/Invited/" + x);
    }

    addCustomer(a:customer ){
      return this.http.post("/api/customer", a);
    }
    addevent(a: NewEvent ){
      return this.http.post("/api/Event", a);
    }

  Getpairs(x: number){
    alert("dbservice")
    debugger;
    return this.http.get("/api/customer/" + x);
  }

  sendemail(x: number){
    return this.http.get("/api/Invited/sendMail/" + x);
  }


   check_if_exist(ent: entryclass){
     return this.http.post("/api/customer/check_if_exist/", ent)
   }


   Get_event(x: number){
    return this.http.get("/api/customer/get_event/"+x);
   }

   Get_category(){
    return this.http.get("/api/category/");
   }
  
   Get_relation(x: number){
    return this.http.get("api/category/all_relation/" + x);
   }

   Get_TypeEvent(){
    return this.http.get("api/category/all_type_event/");
   }

   addconstraints(arr: constraintsinvited[]){
     //this.http.put("/api/Invited",id_invited)
    return this.http.post("/api/category", arr);
   }

   addconfirm(con:boolean,id_invited: Number){
     return this.http.get("/api/Invited/addconfirm/"+con+"/" + id_invited)
   }

   Getconstraints(id: Number){
    return this.http.get("/api/category/getinvitedcon/" + id)
   }

   get_all_category(){
    return this.http.get("/api/category/get_all_category/" + this.currentevent.id_TypeEvent)
   }

   SavePair(arr: finalplace[]){
    return this.http.post("/api/customer/Save/", arr)
   }


   GetScheduling(id: number){
    return this.http.get("/api/customer/GetScheduling/" + id)
   }

   DeleteInvited(id: number){
    return this.http.delete("api/Invited/DeleteInvited/" + id);
    
  }

  addpoint(p: dict[]){
    return this.http.post("/api/Event/AddPoint/", p)
  }

  getAreaPoint(){
    return this.http.get("/api/Event/getAreaPoint/" + this.currentevent.id_event)
  }
}






