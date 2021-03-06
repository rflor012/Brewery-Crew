import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  beers:Array<any>;
  breweriesBeers:Array<any>;
  theId:any;


  constructor(private theService: BeerService, public myActivatedRoute: ActivatedRoute) { }


  allBeers(){
    this.theService.allBeers()
    .subscribe((res)=>{
      this.beers = res;
    });
  }

  beersFromBrewery(){
    this.theService.breweryBeers(this.theId)
    .subscribe((res)=>{
      this.breweriesBeers = res;
      console.log("-----------------------", res)
    });
  }


  ngOnInit() {
    this.myActivatedRoute.params.subscribe((params) => {
      this.theId = params["id"]
      this.beersFromBrewery();
    })
  }

}
