import { Route, Routes } from "@angular/router";
import { addEvent } from "highcharts";
import { AboutComponent } from "./about/about.component";
import { AddeventComponent } from "./addevent/addevent.component";
import { AddinvitedComponent } from "./addinvited/addinvited.component";
import { AppComponent } from "./app.component";
import { finalplace } from "./class/finalplace";
import { ConstraintsComponent } from "./constraints/constraints.component";
import { CustomerComponent } from "./customer/customer.component";
import { EntryComponent } from "./entry/entry.component";
import { FinalschdulingComponent } from "./finalschduling/finalschduling.component";
import { InvitedComponent } from "./invited/invited.component";
import { ListeventComponent } from "./listevent/listevent.component";
import { MaphallComponent } from "./maphall/maphall.component";
import { NewuserComponent } from "./newuser/newuser.component";
import { PagehomeComponent } from "./pagehome/pagehome.component";
import { PlaceInvitedComponent } from "./place-invited/place-invited.component";
import { UpdateinvitedComponent } from "./updateinvited/updateinvited.component";



export const arrpath:Routes=[
{
    path:"pagehome",
    component:PagehomeComponent
},

{
   path:"entry",
   component:EntryComponent

},

{
    path:"about",
    component:AboutComponent
},

{

    path:"entry/newuser",
    component:NewuserComponent
},

{
path:"entry/customer",
    component:CustomerComponent
},

{
    path:"entry/listevent/customer/addinvited",
    component:AddinvitedComponent
},

{
    path:"entry/listevent/addevent",
    component:AddeventComponent

},

{
    path:"entry/listevent/customer/place-invited",
    component:PlaceInvitedComponent

},

{
   path:"entry/listevent",
   component:ListeventComponent

},

{
    path:"entry/listevent/customer",
    component:CustomerComponent
    
 },
 {
    path:"constraints",
    component:ConstraintsComponent
    
 },

 {
    path:"entry/listevent/customer/Invited",
    component:InvitedComponent
 },

 {
     path:"entry/listevent/customer/finalschduling",
    component:FinalschdulingComponent
 },

 {
     path:"entry/listevent/customer/Invited/updateinvited",
     component:UpdateinvitedComponent
 },
 
{
     path:"entry/listevent/customer/maphall",
     component:MaphallComponent
 
},

]




