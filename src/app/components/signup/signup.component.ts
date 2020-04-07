import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email = ""
  password = ""
  passwordTwo = ""
  error = ""

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.password !== this.passwordTwo){
      this.error = "Passwords must match" 
      setTimeout(() => {
        this.error = ""
        clearTimeout()
      }, 5000)
      return console.log("password must match")
    }
    if(this.password === "" || this.passwordTwo === "" || this.email){
      this.error = "Fields cannot be empty"
      setTimeout(() => {
        this.error = ""
        clearTimeout()
      }, 5000)
      return console.log("fields cannot be empty")
    }
  }
}
