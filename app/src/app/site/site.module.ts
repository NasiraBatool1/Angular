import { provideFirestore } from '@angular/fire/firestore';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChefsComponent } from './chefs/chefs.component';
import { BooktableComponent } from './booktable/booktable.component';
import { LoginComponent } from './Models/login/login.component';
import { SignupComponent } from './Models/signup/signup.component';
import { SiteComponent } from './site/site.component';
import { FormsModule } from '@angular/forms';
import { provideFirebaseApp,getApp,initializeApp } from '@angular/fire/app';
import {getFirestore} from '@angular/fire/firestore';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDh6-Bb8EYJ3USn_-IVKVg1NsqgLY8MG0U",
  authDomain: "delisious-73567.firebaseapp.com",
  projectId: "delisious-73567",
  storageBucket: "delisious-73567.appspot.com",
  messagingSenderId: "251803976774",
  appId: "1:251803976774:web:ddad766094a86078deb647"
};

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    HomeComponent,
    AboutComponent,
    ChefsComponent,
    BooktableComponent,
    LoginComponent,
    SignupComponent,
    SiteComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(()=> getAuth())
  ]
})
export class SiteModule { }
