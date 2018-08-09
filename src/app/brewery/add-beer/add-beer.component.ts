import { Component, OnInit } from '@angular/core';
import { BreweryService } from '../../services/brewery.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.css']
})
export class AddBeerComponent implements OnInit {

  theBreweryID:any = {};
  theNewBeerEntry:any = {};
  beers:Array<any>;

  constructor(private theService: BreweryService, private myActivatedRoute: ActivatedRoute) { }

  addNewBeer(){
    this.theService.createBeer(this.theNewBeerEntry)
    .subscribe((response)=>{
      this.allBeers();
      this.router.navigate(['/beers'])
      // location.reload();
      console.log('This======>' + response + "<==== was added into the collection")
    });
  }

  allBeers(){
    this.theService.breweryBeers(this.theBreweryID)
    .subscribe((res)=>{
      this.beers = res;
    });
  }

  ngOnInit() {
  }

}
