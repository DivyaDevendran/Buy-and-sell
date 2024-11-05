import { Component } from '@angular/core';
import { fakeListings } from '../fake-data';
import {Listing} from '../types';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-my-listing-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './my-listing-page.component.html',
  styleUrl: './my-listing-page.component.css'
})
export class MyListingPageComponent {

  listings: Listing[] = [];

  constructor(){}

  ngOnInit(): void {
    this.listings = fakeListings;
  }

  onDeleteClicked(listingId: string): void {
    alert('Deleting your listing with id '+ listingId);
  }
}
