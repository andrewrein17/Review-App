import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IReview } from './review';
import { AppComponent } from './app.component';
import { ReviewComponent } from './home/product-review.component';
import { RouterModule } from '@angular/router';
import { HeadphonesComponent } from './reviews/headphones/headphones.component';
import { InEarsComponent } from './reviews/in-ears/in-ears.component';
import { WirelessComponent } from './reviews/wireless/wireless.component';
import { VideosComponent } from './reviews/videos/videos.component';
import { AboutComponent } from './reviews/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    HeadphonesComponent,
    InEarsComponent,
    WirelessComponent,
    VideosComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: ReviewComponent},
      {path: 'headphones', component: HeadphonesComponent},
      {path: 'in-ear', component: InEarsComponent},
      {path: 'wireless', component: WirelessComponent},
      // {path: 'videos', component: VideosComponent},
      {path: 'about', component: AboutComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }