import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';
import{student} from '../models/studentmdl';
import{studentcls} from'../models/student';
import{Router}from '@angular/router';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  title :string ='arun'
stu:boolean = true;
  arun:string="madhu,aravind"

  isdisables:boolean=false;

  usertype: string = 'teacher'
studentdata: student = {
  rollno: 101,
  name:"arun",
  class:"5th",
  section:"A",
  age:10,
  cnt:84657864876, 
  
}

public subject: string[]=[ 'arun' , 'madhu' , 'aravind' , 'ram' ]


 
public studentlist:student[] = [
  {
    rollno: 101,
  name:"arun",
  class:"5th",
  section:"A",
  age:10,
  cnt:84657864876
  },
  {
    rollno: 102,
    name:"arun",
    class:"5th",
    section:"A",
    age:10,
    cnt:84657864876
  },
 {
  rollno: 103,
  name:"arun",
  class:"5th",
  section:"A",
  age:10,
  cnt:84657864876
 },
 {
 rollno: 104,
  name:"arun",
  class:"5th",
  section:"A",
  age:10,
  cnt:84657864876
 }
]

public stulist:studentcls[] = [
  {
    rollno: 101,
  name:"arun",
  class:"5th",
  section:"A",
  age:10,
  cnt:84657864876
  },
  {
    rollno: 101,
  name:"arun",
  class:"5th",
  section:"A",
  age:10,
  cnt:84657864876
  },
]
submitform(){
  console.log(this.title)
  this.title="updating use the data binding"
  console.log(this.arun)
  this.arun="im in chennai"
}
  constructor(private rout: Router) { }

  ngOnInit(): void {


  }
  student() {
    this.stu = true;
  }
  toggleusertype(usertyp:string){
    if (usertyp == 'T'){
    this.usertype = 'teacher';
    }
    else if (usertyp == 'S'){
      this.usertype = 'student';
    }
  }

  redirectToservice(){
    this.rout.navigateByUrl('/service');
  }

}

 