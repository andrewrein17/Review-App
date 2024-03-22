import { Component, OnInit } from '@angular/core';
import { IReview } from '../../review';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-in-ears',
  templateUrl: './in-ears.component.html',
  styleUrl: './in-ears.component.css'
})
export class InEarsComponent implements OnInit{

  public constructor(private http: HttpClient) {}
  reviews: any;
  ngOnInit(): void {
    const url: string = '/assets/reviews.json';
    this.http.get(url).subscribe((responce) => {
      this.reviews = responce;
      this.reviews = this.reviews.filter((review: IReview) => review.type == "in-ear");
    })
  }

  pageTitle = 'In-Ear Monitor Reviews';
  currentProduct: number = 0;
  imageWidth: number = 400;
  imageHeight: number = 300;
  imageMargin: number = 0;
  showReview: boolean = false;

  selectReview(id: number): void {
    console.log(id);
    this.currentProduct = this.reviews.indexOf(this.reviews.find((i: { id: number; }) => i.id == id));
    console.log(this.currentProduct);
    this.showReview = true;
  }

  close(): void{
    this.showReview = false;
    console.log(this.showReview);
  }
}
