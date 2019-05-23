import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit {
  nombre = 'n';
  apellido = 'a';
  ciudad = 'c';
  cosa = 'co';
  fof = 'fof';
  items1;
  items2;
  vN;
  vA;
  vC;
  vCosa;
  vFof;
  v1;
  v2;
  constructor( public fbs: FirebaseService,
               public db: AngularFireDatabase ) { }

  ngOnInit() {
  }
  eliminarNom( ) {
    this.nombre = '';
  }
  eliminarape( ) {
    this.apellido = '';
  }
  eliminarciu( ) {
    this.ciudad = '';
  }
  eliminarcosa( ) {
    this.cosa = '';
  }
  eliminarfof( ) {
    this.fof = '';
  }

  eliminarNom2( ) {
    this.nombre = '';
  }
  eliminarape2( ) {
    this.apellido = '';
  }
  eliminarciu2( ) {
    this.ciudad = '';
  }
  eliminarcosa2( ) {
    this.cosa = '';
  }
  eliminarfof2( ) {
    this.fof = '';
  }

  verificado1( nom, ape, ciu, cosa, fof) {

    if ( this.nombre === '' ) {
      nom = this.nombre;
      this.vN = 0;
    }
    if (this.apellido === '') {
      ape = this.apellido;
      this.vA = 0;
    }
    if (this.ciudad === '') {
      ciu = this.ciudad;
      this.vC = 0;
    }
    if (this.cosa === '') {
      cosa = this.cosa;
      this.vCosa = 0;
    }
    if (this.fof === '') {
      fof = this.fof;
      this.vFof = 0;
    }
    // let nomb = nom;
    // let apel = ape;
    // let ciud = ciu;
    // let Cosa = cosa;
    // let Fof = fof;
    // nomb = nom[0].toUpperCase() + nom.slice(1);
    // apel = ape[0].toUpperCase() + ape.slice(1);
    // ciud = ciu[0].toUpperCase() + ciu.slice(1);
    // Cosa = cosa[0].toUpperCase() + cosa.slice(1);
    // Fof = fof[0].toUpperCase() + fof.slice(1);

    // console.log(nomb);
    this.fbs.verificaTemporal1(nom, ape, ciu, cosa, fof);
    this.fbs.Validar('J1', nom, ape, ciu, cosa, fof, this.vN, this.vA, this.vC, this.vCosa, this.vFof);
  }
  verificado2( nom, ape, ciu, cosa, fof) {

    if ( this.nombre === '' ) {
      nom = this.nombre;
      this.vN = 0;
    }
    if (this.apellido === '') {
      ape = this.apellido;
      this.vA = 0;
    }
    if (this.ciudad === '') {
      ciu = this.ciudad;
      this.vC = 0;
    }
    if (this.cosa === '') {
      cosa = this.cosa;
      this.vCosa = 0;
    }
    if (this.fof === '') {
      fof = this.fof;
      this.vFof = 0;
    }
    this.fbs.verificaTemporal2(nom, ape, ciu, cosa, fof);
    this.fbs.Validar('J2', nom, ape, ciu, cosa, fof, this.vN, this.vA, this.vC, this.vCosa, this.vFof);
  }
}
