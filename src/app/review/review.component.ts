import { Component, OnInit, Input } from '@angular/core';
import { ReviewService } from '../services/review.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
@Input() thatBeer: any;

  thatOneReview: any;
  // beerEntry: any = {};
  // newReview: any = {};
  userReview: any = {};

  constructor(private viewService: ReviewService, private myActivated: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.thatBeerReview()
  }

  thatBeerReview(){
    // console.log(this.beerReview)
    this.viewService.beerReview()
    .subscribe((res) =>{
      this.thatOneReview = res;
    })
  }
  
  //add
  aNewReview(beerId){
    this.viewService.addReview(beerId, this.userReview)
    .subscribe((res) =>{
      this.thatBeerReview();
      location.reload();
    })
  }

  //edit
  changeReview(){
    this.viewService.editReview(this.thatOneReview)
    .subscribe(() =>{

    })
  }

  deleteReview(){
    console.log(this.thatOneReview._id)
    this.viewService.removeReview(this.thatOneReview._id)
    .subscribe(() => {
      this.router.navigate(['/beers/._id'])
    })
  }
}
