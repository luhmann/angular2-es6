import {Component} from '@angular/core'

import {Service} from './app.service'

@Component({
  selector: 'app',
  providers: [Service],
  template: '{{greeting}} world!'
})
class AppComponent {
  constructor(service: Service) {
    this.greeting = service.greeting();
    setTimeout(() => this.greeting = 'Howdy,', 1000)
  }
}

export { AppComponent }
