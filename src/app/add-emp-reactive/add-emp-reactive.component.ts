import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-emp-reactive',
  templateUrl: './add-emp-reactive.component.html',
  styleUrls: ['./add-emp-reactive.component.css']
})
export class AddEmpReactiveComponent implements OnInit {

  constructor() { }

  empfrm = new FormGroup({
    fullname: new FormControl('',Validators.required),
    address: new FormControl(''),
    doj: new FormControl(''),
    cnt: new FormControl(''),
    city: new FormControl('')
  });

  ngOnInit(): void {
  }
  addemp() {
    console.log(this.empfrm.value);
    
    
  }
  
}
