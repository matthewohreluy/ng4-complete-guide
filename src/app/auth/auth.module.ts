import { SharedModule } from './../shared/shared.module';
import { AuthGuard } from './auth.guard';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations:[AuthComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      [{ path: '', canActivate: [AuthGuard], component: AuthComponent }]
    ),
    SharedModule
  ],
  exports: [
    RouterModule,
    AuthComponent
  ]
})
export class AuthModule{

}