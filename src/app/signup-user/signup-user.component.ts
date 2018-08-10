import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BreweryService } from '../services/brewery.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {
  signUpUser:any = {};
  userBrewery: any = {}
  theActualUser:any = {};
  theError:any;
<<<<<<< HEAD

=======
  
  
>>>>>>> d4f5e7519c89ab85b3c51316da5fee8e902c8e2a

  constructor(private authService: AuthService, private breweryService: BreweryService , private myRouter: Router) { }
  successCallback(userObject){
    this.theActualUser = userObject;
    this.theError = "";
  }

  errorCallback(errorObject){
    this.theError = errorObject;
    this.theActualUser = {username: '', password:''};
  }

  signingUp(){
    console.log(this.signUpUser);
    this.authService.signup(this.signUpUser)
    .subscribe(userFromApi => {
      this.successCallback(userFromApi);
      console.log("hiiiiiiiiii", this.theActualUser);


<<<<<<< HEAD
      this.breweryService.createBrewery(this.userBrewery)
      .subscribe(breweryFromApi => {},
        theError =>{this.errorCallback(theError)}
      )


=======
      this.breweryService.createBrewery(this.userBrewery, this.theActualUser._id)
      .subscribe(breweryFromApi => {
        this.myRouter.navigate(['/'])
>>>>>>> d4f5e7519c89ab85b3c51316da5fee8e902c8e2a
      },
        theError =>{this.errorCallback(theError)}
      )},
      theError => {this.errorCallback(theError)}
      

  );

  }

  ngOnInit() {
  }

}
