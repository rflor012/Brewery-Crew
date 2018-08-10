import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-edit-beer-review',
  templateUrl: './edit-beer-review.component.html',
  styleUrls: ['./edit-beer-review.component.css']
})
export class EditBeerReviewComponent implements OnInit {
  
  theReview: any = {}
  theId: any;
  

  constructor(
    private viewService: ReviewService,
    private myActivated: ActivatedRoute,
    private router: Router  
  ) { }

  ngOnInit() {

  }



  changeReview(){
    this.viewService.editReview(this.theReview)
    .subscribe((res) =>{
      this.theReview = res;
      this.router.navigate(['/beers', this.theReview])
    })
  }

  
}
