import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  studNo1: number;
  studFname1: string;
  studLname1: string;
  studProg1: string;
  studYr1: number;

  
  setStudNo(event){
    this.studNo1 = event;
    console.log(this.studNo1);
  }

  setStudFname(event){
    this.studFname1 = event;
  }

  setStudLname(event){
    this.studLname1 = event;
  }

  setStudProg(event){
    this.studProg1 = event;
  }
  setStudYr(event){
    this.studYr1 = event;
  }
}


