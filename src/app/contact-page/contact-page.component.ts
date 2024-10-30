import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types'; 
import { fakeListings } from '../fake-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  email: string = '';
  message : string = '';
  listing!: Listing;
constructor(private route: ActivatedRoute, private router: Router) {}

ngOnInit():void {
  const id = this.route.snapshot.paramMap.get('id');
  this.listing = fakeListings.find(listing => listing.id === id) || {} as Listing;
  this.message = `Hi I am interested in the item : ${this.listing.name} with the price : ${this.listing.price}.`;
}

sendMessage (): void {
  alert('Your message has been sent');
  this.router.navigateByUrl('/listings');    
}

}
