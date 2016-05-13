import { provide } from '@angular/core'
import { bootstrap } from '@angular/platform-browser-dynamic'
import { ROUTER_PROVIDERS } from '@angular/router'
import { LocationStrategy, HashLocationStrategy } from '@angular/common'

import { AppComponent } from './app/app.component'

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]).catch(err => console.error(err))
