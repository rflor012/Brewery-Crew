import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service'

@Component({
  selector: 'app-edit-beer-review',
  templateUrl: './edit-beer-review.component.html',
  styleUrls: ['./edit-beer-review.component.css']
})
export class EditBeerReviewComponent implements OnInit {
  theReview: any = {}
  

  constructor(
    private viewService: ReviewService
  ) { }

  ngOnInit() {
  }

  changeReview(){
    this.viewService.editReview(this.theReview)
    .subscribe((res) =>{
      
    })
  }

  
}
