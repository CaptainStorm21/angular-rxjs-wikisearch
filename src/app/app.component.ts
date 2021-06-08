// import { Component, Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { WikipediaService } from './service/wikipedia.service';

// @Injectable({ providedIn: 'root'})
// export class Car {
//   color = 'red';
// }
// new Car().color = 'purple';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pages = [];


  constructor(
    // private car: Car,
    private wikipedia: WikipediaService,
 ) { }

  // tslint:disable-next-line: typedef
  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((response: any) => {
      // console.log(response);
      // response is an object console in dev tools
      // { batchcomplete: "", continue {..}, query {...}}
      // query is a property under continue object
      // search is inside of the query
      /*
      this.pages = response.query.search; will have a red underline under "query"
      we need to annotate "response" as being a type any
          this.wikipedia.search(term).subscribe((response: any) => {
      */

      this.pages = response.query.search;
    });
    // console.log('i am the app');
    // this tells us that we communicated from child to parent
    // const results = this.wikipedia.search(term);
    // console.log(results);
    // console.log('My car has a color of ', this.car.color);
  }
}

/*
we are getting
  search() method reaching out to WikipediaService to Wikipedia API
  and gets some data

  1. app.modue.ts
     import HttpClientModule and added to import:[]
  2. go to wikipedia.service.ts

*/

/*
1. we take the response we get back from
      this.wikipedia.search(term).subscribe((response) =>
2. We assign it to a new property in the app component
whenever we try to communicate some info down to the child component
we are usually try to communicate a property from the parent to the child
3. we are going to creat a new propeerty isnide of the App component to store
the list of pages that we get back inside of the respnse object
 {
      console.log(response);
    });
4. create an empty array
  pages = [];
  when the page loads we have nothing to display
  once we geet a respnsde, rther than doing console.log,
  we are going to update the list


*/
