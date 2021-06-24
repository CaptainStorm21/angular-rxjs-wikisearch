import { Injectable } from '@angular/core';
// allow the http request
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

// // if we remove <number>, the "value" on line 13 will be unknown
// const observable = new Observable <number> ((observer) => {
//   observer.next(1);
// });

// // hover over "value", ==> number
// observable.subscribe((value) => {
//   console.log(value);
// });

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor(
    // dependency injection
    private http:HttpClient,
  ) {
  }

  public search(term: string) {
    // to make a request
    // returns an observable
    return this.http.get('https://en.wikipedia.org/w/api.php', {
      /**
          tslint:disable-next-line: jsdoc-format
          tslint:disable-next-line: jsdoc-format
          we passed some arguments to customize network request
          tslint:disable-next-line: jsdoc-format
          tslint:disable-next-line: jsdoc-format
          it tuurns out that http.net() returns an observable
          as soon as a request is completed,
          the observeable is going to emit a valud consisting tof all data
          tslint:disable-next-line: jsdoc-format
          that are retreived from the api https://en.wikipedia.org/w/api.php
       */
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    });
  }
}

