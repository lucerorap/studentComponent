import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-entry',
  templateUrl: './input-entry.component.html',
  styleUrls: ['./input-entry.component.css']
})
export class InputEntryComponent implements OnInit {
  @Output() studNo =  new EventEmitter<number>();
  @Output() studFname =  new EventEmitter<string>();
  @Output() studLname =  new EventEmitter<string>();
  @Output() studProg =  new EventEmitter<string>();
  @Output() studYr =  new EventEmitter<number>();

  setStudNo
  constructor() { }

  ngOnInit() {
  }

}
