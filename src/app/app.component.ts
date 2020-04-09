import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'signupLogin';
  email = ""
  

  onActivate(componentReference) {
    console.log(componentReference, ",------------------whats this refering too")
    //Below will subscribe to the searchItem emitter
    componentReference.childEvent.subscribe((data) => {
      console.log(data)
      this.email = data
    })
 }
}
