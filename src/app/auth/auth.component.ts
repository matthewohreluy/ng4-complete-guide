import { PlaceHolderDirective } from './../shared/placeholder/placeholder.directive';
import { AlertComponent } from './../shared/alert/alert.component';
import { Router } from '@angular/router';
import { AuthResponseData } from './auth-response.interface';
import { AuthService } from './auth.service';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit, OnDestroy{
 
  isLoginMode: boolean = true;
  credentials: FormGroup;
  isLoading: boolean = false;
  private closeSub: Subscription;
  @ViewChild(PlaceHolderDirective, {static: false}) alertHost: PlaceHolderDirective; 

  constructor(private cFR: ComponentFactoryResolver,private fb: FormBuilder, private auth: AuthService, private router: Router){}

  ngOnInit(){
    this.credentials = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]]
    })
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  // onHandleError(){
  //   this.error = null;
  // }

  onSubmit(){
    if(!this.credentials.valid){
      return;
    }
    const credentials = {
      email: this.credentials.controls['email'].value,
      password: this.credentials.controls['password'].value
    }
    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if(this.isLoginMode){
     authObs = this.auth.login(credentials);
    }else{
      authObs = this.auth.signup(credentials);
    }

    authObs.subscribe(resData => {
      this.isLoading = false;
      this.router.navigate(['/recipes']);
    },
      errorMessage => {
        this.isLoading = false;
        this.showErrorAlert(errorMessage);
      }
    );
    
    this.credentials.reset();
  }

  private showErrorAlert(message: string){
    const alertCmpFactory =  this.cFR.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

   const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
   componentRef.instance.message = message;
   this.closeSub = componentRef.instance.close.subscribe(()=>{
     this.closeSub.unsubscribe();
     hostViewContainerRef.clear();
   });
  }

  ngOnDestroy(){
    if(this.closeSub){
      this.closeSub.unsubscribe();
    }
  }
 
}