import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';

import { LoginPageComponent } from './login-page.component';
import { SharedModule } from '../../courses/components/shared.module';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../../courses/effects/auth.effects';

@NgModule({
  imports: [
    BrowserModule, 
    HttpModule,
    FormsModule, 
    SharedModule, 
  ],
  declarations: [
    LoginPageComponent
  ],
  exports: [
    LoginPageComponent
  ],
  providers: [],
})
export class LoginPageModule { }
