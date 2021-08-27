import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated: boolean = false;
  constructor(private dataStorageService: DataStorageService, private authService: AuthService){}

  onSaveData(){
    this.dataStorageService.storeRecipes(); 
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnInit(){
    this.authService.user.subscribe(user=>{
      this.isAuthenticated = !!user;
      console.log(!!user);
    });
  } 

  onLogout(){
    this.authService.logout();
  }
  
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}