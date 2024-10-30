import { Component } from '@angular/core';
import { RouterOutlet,RouterModule  } from '@angular/router';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListingsPageComponent, RouterModule, CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'buy-and-sell';
}
