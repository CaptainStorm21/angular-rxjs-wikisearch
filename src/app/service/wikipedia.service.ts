import { Injectable } from '@angular/core';
// allow the http request
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(
    // dependency injection
    private http:HttpClient,
  ) {
    // not recommended this.httpClient = new HttpClient;
  }

  public search(term: string) {
    // to make a request
    return this.http.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    });
    // return 'I am wikipedia searhc result ';
  }
}



/*
we want our Wikipedia service to make a request using an insatnace of a client
  export class WikipediaService
we use dependency injerction because that is how angular gets dependencies
avail. insode of services componente and etc
export class WikipediaService {
  constructor(
    private http:HttpClient,
  ) {}
*/


// https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space

/*
1. used to fetch / store update any kin do fdata
2. always where are going to put network request
3   data flows from service to component
4   seervices are implmemented as classes
5.  ang will automatically creat a single instance of each service
*/

/*
HttpClient is a class in order to make a request with it,
we need to create an instance of it
We want our Wikipedia service to make a request using an instance of a client

*/
