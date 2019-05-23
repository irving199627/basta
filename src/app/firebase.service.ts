import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  items: Observable<any[]>;
  items2: Observable<any[]>;
  itemsTemp1: Observable<any[]>;
  J1TemporalVal: Observable<any[]>;
  J2TemporalVal: Observable<any[]>;
  itemsTemp2: Observable<any[]>;
  itemsRef;
  J1 = [];
  J2 = [];
  letra;
  letraRef;
  verifica1 = [];
  verifica2 = [];
  J1TemporalV = [];
  J2TemporalV = [];
  vN;
  vA;
  vC;
  vCosa;
  vFof;
  //
  nombre;
  apellido;
  ciudad;
  cosa;
  fof;
  constructor( public db: AngularFireDatabase ) {
    this.items = this.db.list('J1').valueChanges();
    this.items2 = this.db.list('J2').valueChanges();
    this.itemsTemp1 = this.db.list('J1Temporal').valueChanges();
    this.itemsTemp2 = this.db.list('J2Temporal').valueChanges();
    this.letraRef = db.list('letra');
    this.itemsTemp1.subscribe(data => {
      this.verifica1 = data;
      console.log(data);
    });
    this.itemsTemp2.subscribe(data => {
      this.verifica2 = data;
    });
    this.items2.subscribe(data => {
      this.J2 = data;
    });
    this.items.subscribe(data => {
      this.J1 = data;
      console.log(data);
    });
    this.itemsRef = this.db.list('J1');
  }

  agregarDiccionario(nombre, apellido, ciudad, cosa, fof) {
    const itemRefDic = this.db.list('diccionario');
    itemRefDic.push({
        nombre,
        apellido,
        ciudad,
        cosa,
        fof,
    });
  }
  almacenar1(id, nombre, apellido, ciudad, cosa, fof, puntsN, puntsA, puntsC, puntsCosa, puntsFof) {
    const itemsRef = this.db.list('J1');
    if (id === 'J1') {
      itemsRef.push({
        nombre,
        apellido,
        ciudad,
        cosa,
        fof,
        puntsN,
        puntsA,
        puntsC,
        puntsCosa,
        puntsFof
  });
    } else {
      const itemsRef2 = this.db.list('J2');
      itemsRef2.push({
        nombre,
        apellido,
        ciudad,
        cosa,
        fof,
        puntsN,
        puntsA,
        puntsC,
        puntsCosa,
        puntsFof
  });
    }
    // this.renderer.setAttribute(this.nombre.nativeElement, 'disabled', 'true'); // bloquear campos
    // Resetear campos vacíos
  }
  verificar(nombre, apellido, ciudad, cosa, fof) {
    const temporal1 = this.db.list('J1Temporal');
    temporal1.set('0', {
        nombre,
        apellido,
        ciudad,
        cosa,
        fof
      });
    console.log(temporal1);
  }

  verificar2(nombre, apellido, ciudad, cosa, fof) {
    const temporal2 = this.db.list('J2Temporal');
    temporal2.set('0', {
        nombre,
        apellido,
        ciudad,
        cosa,
        fof
      });
    // console.log(temporal2);
  }
  verificaTemporal1(nombre, apellido, ciudad, cosa, fof) {
    const temporal1 = this.db.list('J1TemporalV');
    temporal1.set('0', {
        nombre,
        apellido,
        ciudad,
        cosa,
        fof
      });
    // console.log(temporal1);
  }
  verificaTemporal2(nombre, apellido, ciudad, cosa, fof) {
    const temporal2 = this.db.list('J2TemporalV');
    temporal2.set('0', {
        nombre,
        apellido,
        ciudad,
        cosa,
        fof
      });
    // console.log(temporal1);
  }
  verificarFinal(id, nom, ape, ciu, cosa, fof, vN, vA, vC, vCosa, vfof) {
    this.J1TemporalVal = this.db.list('J1TemporalV').valueChanges();
    this.J2TemporalVal = this.db.list('J2TemporalV').valueChanges();

    this.J1TemporalVal.subscribe(el => {
      this.J1TemporalV = el;
    });
    this.J2TemporalVal.subscribe(elemento => {
      this.J2TemporalV = elemento;
      // console.log(this.J2TemporalV);
      if (id === 'J1') {
        const Nombre = this.J2TemporalV.find(element => element.nombre === nom);
        const apellido = this.J2TemporalV.find(element => element.apellido === ape);
        const ciudad = this.J2TemporalV.find(element => element.ciudad === ciu);
        const Cosa = this.J2TemporalV.find(element => element.cosa === cosa);
        const flor = this.J2TemporalV.find(element => element.fof === fof);
        if (Nombre) {
          vN = 50;
        }
        if (apellido) {
          vA = 50;
        }
        if (ciudad) {
          vC = 50;
        }
        if (Cosa) {
          vCosa = 50;
        }
        if (flor) {
          vfof = 50;
        }
        if (!Nombre ) {
          vN = 100;
        }
        if (!apellido ) {
          vA = 100;
        }
        if (!ciudad ) {
          vC = 100;
        }
        if (!Cosa ) {
          vCosa = 100;
        }
        if (!flor) {
          vfof = 100;
        }
        if (nom === '') {
          vN = 0;
        }
        if (ape === '') {
          vA = 0;
        }
        if (ciu === '') {
          vC = 0;
        }
        if (cosa === '') {
          vCosa = 0;
        }
        if (fof === '') {
          vfof = 0;
        }
        console.log(nom, ape, ciu, cosa, fof, vN, vA, vC, vCosa, vfof);
        this.almacenar1('J1', nom, ape, ciu, cosa, fof, vN, vA, vC, vCosa, vfof);
        this.agregarDiccionario(nom, ape, ciu, cosa, fof);
      }
    });
    if (id === 'J2') {
      // console.log(nom, ape, ciu, cosa, fof, vN, vA, vC, vCosa, vfof);
      const Nombre = this.J1TemporalV.find(element => element.nombre === nom);
      const apellido = this.J1TemporalV.find(element => element.apellido === ape);
      const ciudad = this.J1TemporalV.find(element => element.ciudad === ciu);
      const Cosa = this.J1TemporalV.find(element => element.cosa === cosa);
      const flor = this.J1TemporalV.find(element => element.fof === fof);
      if (Nombre) {
        vN = 50;
      }
      if (apellido) {
        vA = 50;
      }
      if (ciudad) {
        vC = 50;
      }
      if (Cosa) {
        vCosa = 50;
      }
      if (flor) {
        vfof = 50;
      }
      if (!Nombre ) {
        vN = 100;
      }
      if (!apellido ) {
        vA = 100;
      }
      if (!ciudad ) {
        vC = 100;
      }
      if (!Cosa ) {
        vCosa = 100;
      }
      if (!flor) {
        vfof = 100;
      }
      if (nom === '') {
        vN = 0;
      }
      if (ape === '') {
        vA = 0;
      }
      if (ciu === '') {
        vC = 0;
      }
      if (cosa === '') {
        vCosa = 0;
      }
      if (fof === '') {
        vfof = 0;
      }
      console.log(nom, ape, ciu, cosa, fof, vN, vA, vC, vCosa, vfof);
      this.almacenar1('J2', nom, ape, ciu, cosa, fof, vN, vA, vC, vCosa, vfof);
      this.agregarDiccionario(nom, ape, ciu, cosa, fof);
    }
    // console.log(id, nom, ape, ciu, cosa, fof, vN, vA, vC, vCosa, vfof);

  }

  generarLetra() {
   const aLetras = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
   'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
   this.letraRef.set('letra', { letra: aLetras[Math.floor(Math.random() * aLetras.length)] });
   const letra: Observable<any[]> = this.db.list('letra').valueChanges();
   letra.subscribe(letr => {
      this.letra = letr[0].letra;
   });
  }
  Validar(id, nom, ape, ciu, cosa, fof, vN, vA, vC, vCosa, vfof) {
    if (id === 'J1') {
      const Nombre = this.J1.find(element => element.nombre === nom);
      const apellido = this.J1.find(element => element.apellido === ape);
      const ciudad = this.J1.find(element => element.ciudad === ciu);
      const csa = this.J1.find(element => element.cosa === cosa);
      const Fof = this.J1.find(element => element.fof === fof);
      if (Nombre && nom !== '') {
        vN = 50;
      }
      if (!Nombre && nom !== '') {
        vN = 100;
      }
      if (apellido) {
        vA = 50;
        console.log(this.J1TemporalV);
      }
      if (!apellido && ape !== '') {
        vA = 100;
      }
      if (ciudad) {
        vC = 50;
      }
      if (!ciudad && ciu !== '') {
        vC = 100;
      }
      if (csa) {
        vCosa = 50;
      }
      if (!csa && cosa !== '') {
        vCosa = 100;
      }
      if (Fof) {
        vfof = 50;
      }
      if (!Fof && fof !== '') {
        vfof = 100;
      }
      if (nom === '') {
        vN = 0;
      }
      if (ape === '') {
        vA = 0;
      }
      if (ciu === '') {
        vC = 0;
      }
      if (cosa === '') {
        vCosa = 0;
      }
      if (fof === '') {
        vfof = 0;
      }
      this.nombre = nom;
      this.apellido = ape;
      this.ciudad = ciu;
      this.cosa = cosa;
      this.fof = fof;
      this.vN = vN;
      this.vA = vA;
      this.vC = vC;
      this.vCosa = vCosa;
      this.vFof = vfof;
    } else {
      const Nombre = this.J2.find(element => element.nombre === nom);
      const apellido = this.J2.find(element => element.apellido === ape);
      const ciudad = this.J2.find(element => element.ciudad === ciu);
      const csa = this.J2.find(element => element.cosa === cosa);
      const Fof = this.J2.find(element => element.fof === fof);
      if (!Nombre) {
        vN = 100;
      }
      if (Nombre) {
        vN = 50;
      }
      if (apellido) {
        vA = 50;
        console.log(this.J1TemporalV);
      }
      if (!apellido) {
        vA = 100;
      }
      if (ciudad) {
        vC = 50;
      }
      if (!ciudad) {
        vC = 100;
      }
      if (csa) {
        vCosa = 50;
      }
      if (!csa) {
        vCosa = 100;
      }
      if (Fof) {
        vfof = 50;
      }
      if (!Fof) {
        vfof = 100;
      }
      if (nom === '') {
        vN = 0;
      }
      if (ape === '') {
        vA = 0;
      }
      if (ciu === '') {
        vC = 0;
      }
      if (cosa === '') {
        vCosa = 0;
      }
      if (fof === '') {
        vfof = 0;
      }
      // console.log(nom, ape, ciu, cosa, fof, vN, vA, vC, vCosa, vfof);
      this.verificarFinal('J1', this.nombre, this.apellido, this.ciudad, this.cosa, this.fof, this.vN,
                          this.vA, this.vC, this.vCosa, this.vFof);
      this.verificarFinal('J2', nom, ape, ciu, cosa, fof, vN, vA, vC, vCosa, vfof);
    }
  }
}
