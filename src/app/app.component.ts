// import { Component, Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { WikipediaService } from './service/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages = [];
  constructor(private wikipedia: WikipediaService) {}

  // tslint:disable-next-line: typedef
  onTerm(term: string) {
    // this.wikipedia.search(term) retrieves an observable
    // observable is going ot star to emit some events
    // as soon as it reteives some data from wikipedia api
    // then we call subscribe() on it and we pass it our observer
    // (response: any) => {this.pages = response.query.search;});
    // this function will be called any time that the obserable emits a value

    /*
    in our case we receive that value "response" we pull off one property "search",
    which was the array of page objects and we assigned it
    to the property "this.pages"
    */

    // remove "any" from    this.wikipedia.search(term).subscribe((response: any) => {
    //  hover over (reponse) -- we will see an interface properties

    // error-this.pages = response.query.search;
    // query does not exist on type { title: string, snippet: string, pageid: number }[].ts
    //   this.wikipedia.search(term).subscribe((response) => {
    //     // error - generating  ---- this.pages = undefined.search;
    //     this.pages = response.query.search;
    //   });
    // }
    this.wikipedia.search(term).subscribe((articles) => {
      // fix error solution
      this.pages = articles;
    });
  }
}
