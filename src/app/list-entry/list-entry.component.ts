import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-entry',
  templateUrl: './list-entry.component.html',
  styleUrls: ['./list-entry.component.css']
})
export class ListEntryComponent implements OnInit {
  printing = false;
  listStudents(): void{
    this.printing = true;
    console.log('Showing stored students');
  }
  constructor() { }

  ngOnInit() {
  }

}
