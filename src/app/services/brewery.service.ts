import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { jsonpFactory } from '@angular/http/src/http_module';


@Injectable({
  providedIn: 'root'
})
export class BreweryService {

  constructor(private http: Http) { }

  handleError(e){
    return Observable.throw(e.json().message);
  }

  allBreweries(){
    return this.http.get('http://localhost:3000/api/breweries')
    .map(res => res.json())
    .catch(this.handleError)
  }


  oneBrewery(brewery){
    return this.http.get('http://localhost:3000/api/breweries/' + brewery.id, {withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError)
  }

  breweryBeers(theBreweryID){
    return this.http.get('http://localhost:3000/api/breweries/' + theBreweryID + '/beers', {withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError)
  }

  createBrewery(theBreweryEntry){
    const newBrewery = theBreweryEntry
    return this.http.post('http://localhost:3000/api/breweries/create', newBrewery, {withCredentials: true})
    .map((res) => res.json())
    .catch(this.handleError)
  }

  createBeer(beerEntry, theBreweryID){
    console.log("===================================>", theBreweryID)
    return this.http.post('http://localhost:3000/api/breweries/' + theBreweryID._id + '/beers/create', beerEntry, {withCredentials: true})
    .map((res) => res.json())
    .catch(this.handleError)
  }

  editBrewery(brewery){
    return this.http.post(`http://localhost:3000/api/breweries/${brewery._id}/edit`, {withCredentials: true})
    .map((res) => res.json())
    .catch(this.handleError)
  }

  deleteBrewery(brewery){
    return this.http.post(`http://localhost:3000/api/breweries/${brewery._id}/remove`, {withCredentials: true})
    .map((res) => res.json())
    .catch(this.handleError)
  }
}
