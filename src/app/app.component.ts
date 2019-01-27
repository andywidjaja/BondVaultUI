import { Component } from '@angular/core';
import { Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Bond Vault';
  loading = true;

  constructor(private router: Router) {
    router.events.subscribe(
      (routerEvent: Event) => {
        this.checkRouterEvent(routerEvent);
      }
    );
  }

  checkRouterEvent(routerEvent: Event) {
    if (routerEvent instanceof NavigationStart) {
      console.log("Navigation Start");
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
      console.log("Navigation End");
      this.loading = false;
    }
  }
}