import { Routes } from '@angular/router';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MyListingPageComponent } from './my-listing-page/my-listing-page.component';
import {NewListingPageComponent} from './new-listing-page/new-listing-page.component';

export const routes: Routes = [
 {path: '', redirectTo:'listings', pathMatch: 'full'},
 {path: 'listings', component: ListingsPageComponent, pathMatch: 'full'},
 {path: 'listings/:id', component: ListingDetailPageComponent},
 {path: 'contact/:id', component: ContactPageComponent},
 {path: 'my-listings', component: MyListingPageComponent},
 {path: 'new-listing', component: NewListingPageComponent},
];
