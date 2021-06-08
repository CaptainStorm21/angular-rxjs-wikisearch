import { Component, OnInit } from '@angular/core';
// child to parent communication
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  //Output will tell angular that we are going to write our a property right here that is going to be
  //be use to trigger some info and send it back to the parent 
  //then we are going to write out of the property that we are going eventually emit
  @Output() submitted = new EventEmitter<string>();
  //<string>  is a generic annotation
  // it means that we are going ot evnetually emit or send out(emit) some info that is a string

  // submitted is any evening object or an install of EventEmitter
  //we can use this to trigger events that get sent back up to the parent component
    
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(event: any) {
    //event.preventDefault () stops the function 
    //and does not refresh automatically
    event.preventDefault();
    // console.log(this.term);
    this.submitted.emit(this.term);
    //takes the stored property entrance and sends it backt to the app component
  }
  // onInput(value: string) {
  //   this.term = value;
  // }
  // html (input)="onInput($event.target.value)"

}

/*
step 1 - import { EventEmitter, Output } from '@angular/core';
step 2 - we create a new event emitter and whatever name that we use righ there is going ot be name of the event
         @Output() submitted = new EventEmitter<string>();
         that gets triggered from our component
step 3 - then when we want to communicate info we will call it emit and we pass in the info that we want to commucate
         this.submitted.emit(this.term)
step 4 - return to the parent component 
          inside of the app.component.html <app-search-bar></app-search-bar> we add event binding synthanx 
step 5 -  <app-search-bar (submitted)="onTerm()"></app-search-bar> whenever the submitted evne occurs it triggers or passes
          along some info specifically that search this.term
*/