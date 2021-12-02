import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PagehomeComponent } from './pagehome/pagehome.component';
import { EntryComponent } from './entry/entry.component';
import { AboutComponent } from './about/about.component';
import { arrpath} from './path1';
import { RouterModule} from '@angular/router';
import { NewuserComponent } from './newuser/newuser.component';
import { NgIf } from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddinvitedComponent } from './addinvited/addinvited.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';
import { AddeventComponent } from './addevent/addevent.component';
import { PlaceInvitedComponent } from './place-invited/place-invited.component';
import { ListeventComponent } from './listevent/listevent.component';
import { ConstraintsComponent } from './constraints/constraints.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {MatTreeModule} from '@angular/material/tree';
import { InvitedComponent } from './invited/invited.component';
import {MatRippleModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import { FinalschdulingComponent } from './finalschduling/finalschduling.component';
import { UpdateinvitedComponent } from './updateinvited/updateinvited.component';
import { MaphallComponent } from './maphall/maphall.component';
import{DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    PagehomeComponent,
    EntryComponent,
    AboutComponent,
    NewuserComponent,
    AddinvitedComponent,
    CustomerComponent,
    AddeventComponent,
    PlaceInvitedComponent,
    ListeventComponent,
    ConstraintsComponent,
    InvitedComponent,
    FinalschdulingComponent,
    UpdateinvitedComponent,
    MaphallComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(arrpath) ,
    MatSliderModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule ,
    BrowserAnimationsModule,
    HttpClientModule,
    MatStepperModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTreeModule,
    MatRippleModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    MatMenuModule,
    MatExpansionModule,
    DragDropModule  
  ],

  bootstrap: [AppComponent]
  
})
export class AppModule { }
