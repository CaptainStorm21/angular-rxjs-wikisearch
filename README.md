# AngularWikisearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).










step 1
    when we use RxJS inside of the Angular, we are going to have services that are fetching a data.

export class WikipediaService {
  constructor (private http: HttpClient){}
}
step 2
  we added into our search method on the observable that gets assignment_returned

public search (term: string) {
  return this.http
    get<WikipediaResponse>('http://en.wikipedia.org/w/api.php'){
      params : {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    }
})

step 3:
  we add a pipe statement
   .pipe(pluck('query', 'search'))
pipe statement transforms the data that is coming out of this observable
  params : {
    action: 'query',
    format: 'json',
    list: 'search',
    utf8: '1',
    srsearch: term,
    origin: '*'
  }

step 4
  we added on that pipe statemnet we did not make a change to where the data was actually being consumed
  onTerm (term: string) {
    this.wikipedia.search(term).subscribe (pages => {
      this.pages = pages
    })
  }

  we added a generic type  .get<WikipediaResponse> now typescript has enough information to under what is coming out of an observable
  return this.http .get<WikipediaResponse> all the way down just before .pipe()
  It understands how the data is being transformed by the pluck operator
  and it understand the type of data that is now flowing into our app component as soon as as remove

  onTerm (term: string) {...}

  this.pages originates from an empty object page=[] in app.component.ts
