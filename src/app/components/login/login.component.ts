import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  @Output() childEvent = new EventEmitter()

  constructor(private fetch: FetchCallsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(`email: ${this.email}, password: ${this.password}`)
    if (this.email === "" || this.password === "") {
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
    this.router.navigate(['']);
    this.childEvent.emit(user.email)
    this.fetch.userLogin(user).subscribe(() => {
      this.email = ""
      this.password = ""
    })
  }
}