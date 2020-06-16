import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { NbComponent } from './nb/nb.component';
import { InputfilterComponent } from './inputfilter/inputfilter.component';
import { NewfilterclassComponent } from './newfilterclass/newfilterclass.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    NbComponent,
    InputfilterComponent,
    NewfilterclassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
