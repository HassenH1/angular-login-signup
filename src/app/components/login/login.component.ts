import { Component, OnInit } from '@angular/core';
import { FetchCallsService } from 'src/app/service/fetchCalls.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ""
  password = ""
  error = ""

  constructor(private fetch: FetchCallsService ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(`email: ${this.email}, password: ${this.password}`)
    if(this.email === "" || this.password === ""){
      this.error = "All fields must be completed"
      setTimeout(() => {
        this.error = ""
        clearTimeout()
      }, 5000)
    }
    const user = {
      email: this.email,
      password: this.password
    }
    this.fetch.userLogin(user).subscribe(() => {
      this.email = ""
      this.password = ""
    })
  }

}
