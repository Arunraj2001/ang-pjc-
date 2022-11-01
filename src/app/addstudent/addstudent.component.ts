import { Component, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';
import { people } from '../models/people';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }
   
  peoplelst:people[] = [
    {
      country:"USA",
      name:"Arun" 
    },
    {
      country:"UK",
      name:"Aravind" 
    },
    {
      country:"Paris",
      name:"madhu" 
    },
    {
      country:"Singapore",
      name:"ram" 
    },
  ]
  todayDt = new Date();
  jsonval = {name:'arun',age:'22', address:{a1:'Channei',a2:'trichy'}};
  months = ["jan","feb","mar","apr","may","jun","july","aug","sep","oct","nov","dec"];
  amount = 250;
  marks = 0.2001;
  ngOnInit(): void {
  }
getcolor(cntry:string):string {

  if (cntry == 'USA') {
    return 'green';
  }
  else if(cntry == 'UK'){
    return 'blue';
  }
  else if (cntry == 'paris'){
    return 'orange';
  }
  else{
    return 'yellow';
  }
}

}
