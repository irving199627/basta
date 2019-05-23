import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AdminComponent } from './components/admin/admin.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { Jugador1Component } from './components/jugador1/jugador1.component';
import { Jugador2Component } from './components/jugador2/jugador2.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    Jugador1Component,
    Jugador2Component,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
