import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { jsonpFactory } from '@angular/http/src/http_module';


@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: Http) { }

  handleError(e){
    return Observable.throw(e.json().message);
  }

  allBeers(){
    return this.http.get('http://localhost:3000/api/beers', {withCredentials: true})
    .map((res) => res.json())
    .catch(this.handleError)
  }

  oneBeer(theId){
    return this.http.get('http://localhost:3000/api/beers/'+theId)
    .map((res) => res.json())
    .catch(this.handleError)
  }

  breweryBeers(theBreweryID){
    return this.http.get('http://localhost:3000/api/breweries/' + theBreweryID + '/beers')
    .map(res => res.json())
    .catch(this.handleError)
  }
  //
  // createBeer(theBreweryID){
  //   return this.http.post('http://localhost:3000/api/breweries/' + theBreweryID + '/beers/create', {withCredentials: true})
  //   .map((res) => res.json())
  //   .catch(this.handleError)
  // }

  editBeer(theId){
    return this.http.post('http://localhost:3000/api/brewery/beer/edit/' + theId, {withCredentials: true})
    .map((res) => res.json())
    .catch(this.handleError)
  }

  deleteBeer(theId){
    console.log('About to delete beeeeeeeeeeeeeeeer', theId)
    return this.http.post('http://localhost:3000/api/brewery/beer/delete/' + theId, {withCredentials: true})
    .map((res) => res.json())
    .catch(this.handleError)
  }

  removeReview(index, reviewID) {
    return this.http.post(`http://localhost:3000/api/beer/review/${reviewID}/delete/${index}`, {} , {withCredentials: true})
    .map((res) => res.json())
    .catch(this.handleError)
  }
}
