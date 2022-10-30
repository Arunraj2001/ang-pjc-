import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public signin:boolean = false;
  public signup:boolean = true;

  Signup(){
    this.signin=false;
    this.signup=true;
  }

  login(){
    this.signin=true;
    this.signup=false;
  }

  
}
