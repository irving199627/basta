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

    this.fbs.verificarFinal(nom, ape, ciu, cosa, fof, this.vN, this.vA, this.vC, this.vCosa, this.vFof);
  }
  almacenar1(nom, ape, ciu, cosa, fof) {
    this.fbs.verificaTemporal1(nom, ape, ciu, cosa, fof);
  }
  almacenar2(nom, ape, ciu, cosa, fof) {
    this.fbs.verificaTemporal2(nom, ape, ciu, cosa, fof);
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

    this.fbs.verificaFinal2(nom, ape, ciu, cosa, fof, this.vN, this.vA, this.vC, this.vCosa, this.vFof);
    this.fbs.btnParo(false);
    this.fbs.JugarNuevo('J1', false);
    this.fbs.JugarNuevo('J2', false);
  }
}
