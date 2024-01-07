import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <html>
      <head>
        <title>Max Audio Reviews</title>
      </head>
      <body>
        <div class="title">
          <h1 style="text-align: center;">
            <a class="nav-link" routerLink="home">Max Audio Reviews</a>
          </h1>
        </div>
        <header>
          <nav>
            <ul class="menu">
              <li><a class="nav-link" routerLink="home">Home</a></li>
              <li>
                <a class="nav-link" routerLink="headphones">Headphones</a>
              </li>
              <li><a class="nav-link" routerLink="in-ear">In-Ear</a></li>
              <li><a class="nav-link" routerLink="wireless">Wireless</a></li>
              <!-- <li><a class="nav-link" routerLink="videos">Videos</a></li> -->
              <li><a class="nav-link" routerLink="about">About</a></li>
            </ul>
          </nav>
        </header>
        <div class="container">
          <router-outlet></router-outlet>
        </div>
      </body>
    </html>
  `,
})
export class AppComponent {
  title = 'Review-App';
}
