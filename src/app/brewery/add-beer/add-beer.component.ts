import { Component, OnInit } from '@angular/core';
import { BreweryService } from '../../services/brewery.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BeerService } from '../../services/beer.service';


@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.css']
})
export class AddBeerComponent implements OnInit {

  theBreweryID:any;
  theNewBeerEntry:any = {};
  beers:Array<any>;

  constructor(private theService: BreweryService, private theBeerService: BeerService, public myActivatedRoute: ActivatedRoute, router: Router) { }

  addNewBeer(){
    console.log("***********************************--->", this.theNewBeerEntry)
    console.log(" %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% ", this.theBreweryID);
    this.theService.createBeer(this.theNewBeerEntry, this.theBreweryID)
    .subscribe((response)=>{
      this.theNewBeerEntry = {};
      this.showAllBeers();
      console.log('This======>' + this.theNewBeerEntry + "<==== was added into the collection")
    });
  }

  showAllBeers(){
    this.theBeerService.breweryBeers(this.theBreweryID)
    .subscribe((res)=>{
      this.beers = res;
    });
  }

  ngOnInit() {
    this.myActivatedRoute.params.subscribe((params) => {
      console.log("the params ############################################ ", params)
      this.theBreweryID = params['id']
      this.showAllBeers();
    })
  }

}
