import { Component, OnInit } from '@angular/core';
import { FetchCallsService } from 'src/app/service/fetchCalls.service'

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
  success = ""

  constructor(private fetch: FetchCallsService) { }

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

    if(this.password !== "" || this.email !== "" || this.passwordTwo !== ""){
      const user = {
        email: this.email,
        password: this.password
      }
      this.fetch.SignUpUser(user).subscribe(() => {
        this.email = ""
        this.password = ""
        this.passwordTwo = ""
        this.success = `${user.email} has successfully been Created`
        setTimeout(() => {
          this.success = ""
          clearTimeout()
        }, 5000)
      })
    }
  }
}
