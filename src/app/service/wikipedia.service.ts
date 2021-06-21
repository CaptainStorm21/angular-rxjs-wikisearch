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
  }

  public search(term: string) {
    // to make a request
    //returns an observable
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
  }
}

