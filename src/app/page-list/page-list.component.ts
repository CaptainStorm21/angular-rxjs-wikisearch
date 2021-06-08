import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
/*
step 4 we need to add an input proerty
this tells compoennt to expect parent to provide the value for this property
*/

/*
  step 4 continue...
  we use @Input() decorator to tell angular that the property that we are going to list out
  is going to be provided from he parent component
*/
  @Input() pages = [];

  constructor() { }

  ngOnInit(): void {
  }

}

