import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { NavComponent } from "./nav/nav.component";
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, NavComponent, NgbModalModule]
})
export class AppComponent {
  title = 'portfolio';
  email: string = "mitanshu.999patel@gmail.com";
}
