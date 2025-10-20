

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashComponent } from './dash/dash.component';
import { ProductComponent } from './product/product.component';
import { AuthComponent } from './auth/auth.component';

import { StatsComponent } from './stats/stats.component';
import { FormsModule } from '@angular/forms';
import {provideFirebaseApp,getApp,initializeApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import { DataTablesModule } from 'angular-datatables';
import {Auth, provideAuth} from '@angular/fire/auth';
import {getAuth} from '@firebase/auth';

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
    DashComponent,
    ProductComponent,
    AuthComponent,

    StatsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    DataTablesModule,
    provideFirebaseApp(()=>initializeApp(firebaseConfig)),
    provideFirestore(()=>getFirestore()),
    provideAuth(()=>getAuth()),
  ]
})
export class DashboardModule { }
