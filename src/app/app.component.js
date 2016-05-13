import { Component } from '@angular/core'

import { Service } from './app.service'
import template from './app.template.html'

@Component({
  selector: 'app',
  providers: [Service],
  template: template
})
class AppComponent {
  constructor(service: Service) {
    this.greeting = service.greeting();
    setTimeout(() => this.greeting = 'Howdy,', 1000)
  }
}

export { AppComponent }
