import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { gtr10 } from '../shared/customvalidation/employevalid';
import{countrylst}from '../models/countrylst'

@Component({
  selector: 'app-add-emp-reactive',
  templateUrl: './add-emp-reactive.component.html',
  styleUrls: ['./add-emp-reactive.component.css']
})
export class AddEmpReactiveComponent implements OnInit {

  constructor() { }
 cntrlst:any =[
  {
    cntryid:"blank",
    cntryval:"   "
  },
{
  cntryid:"ind",
  cntryval:"india"
},
{
  cntryid:"mub",
  cntryval:"mumbai"
},
{
  cntryid:"eng",
  cntryval:"england"
},
{
  cntryid:"uk",
  cntryval:"london"
},
 ]

  empfrm = new FormGroup({
    fullname: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern("^[a-zA-Z]+$")]),
    address: new FormControl(''),
    doj: new FormControl(''),
    cnt: new FormControl('', [gtr10]),
    city: new FormControl(''),
    country: new FormControl('',Validators.required)
  });

  ngOnInit(): void {
  }

  addemp() {

    console.log(this.empfrm.value);

  }
  edtemp() {
    this.empfrm.setValue({
      fullname: 'arunkumar001',
      address: 'trichy',
      doj: '10-11-2001',
      cnt: '9585828436',
      city: 'tri',
      country:'usa'

    })


    // this.empfrm.patchValue({
    //   fullname:'arun',3
    //   address:'trichy',
    //   doj:'10-11-2001', 
    //   cnt:'9585828436',
    //   city:'tri'
    // })
  }
 cntryval(){
  console.log(this.empfrm.controls.country.value);
  let contryselval = this.empfrm.controls.country.value;
  if(contryselval !=''){
  this.empfrm.controls.city.setValidators(Validators.required);
  this.empfrm.controls.city.updateValueAndValidity();
  }
  else{
    this.empfrm.controls.city.clearValidators();
    this.empfrm.controls.city.updateValueAndValidity();
    this.empfrm.controls.city.reset();
  }
 }
}
