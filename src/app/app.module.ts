import { OnChangesComponent } from './on-changes/on-changes.component';
import { TimerComponent } from './parent-child/timer/timer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatFormField } from "@angular/material/form-field";
import {MatProgressBarModule} from "@angular/material/progress-bar";

import { InputBindingComponent } from './input-binding/input-binding.component';
import { ClientComponent } from './input-binding/client/client.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { ChildItemComponent } from './event-emitter/child-item/child-item.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { NameChangesComponent } from './on-changes/name-changes/name-changes.component';
@NgModule({
  declarations: [
    ParentChildComponent,
    OnChangesComponent,
    NameChangesComponent,
    TimerComponent,
    AppComponent,
    InputBindingComponent,
    ClientComponent,
    EventEmitterComponent,
    ChildItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatFormField,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
