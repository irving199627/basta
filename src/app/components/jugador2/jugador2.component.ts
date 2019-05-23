import { Component, OnInit, ViewChild, ElementRef, Renderer2, } from '@angular/core';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-jugador2',
  templateUrl: './jugador2.component.html',
  styles: []
})
export class Jugador2Component implements OnInit {
  @ViewChild('nombre') nombre: ElementRef;
  @ViewChild('apellido') apellido: ElementRef;
  @ViewChild('ciudad') ciudad: ElementRef;
  @ViewChild('cosa') cosa: ElementRef;
  @ViewChild('fof') fof: ElementRef;
  constructor( private renderer: Renderer2,
               public fbs: FirebaseService ) { }

  ngOnInit() {
  }
  limpiar(nombre, apellido, ciudad, cosa, fof) {
      this.renderer.setProperty(this.nombre.nativeElement, 'value', '');
      this.renderer.setProperty(this.apellido.nativeElement, 'value', '');
      this.renderer.setProperty(this.ciudad.nativeElement, 'value', '');
      this.renderer.setProperty(this.cosa.nativeElement, 'value', '');
      this.renderer.setProperty(this.fof.nativeElement, 'value', '');
      let nomb = nombre;
      let apel = apellido;
      let ciud = ciudad;
      let Cosa = cosa;
      let Fof = fof;
      if (nombre) {
        nomb = nombre[0].toUpperCase() + nombre.substr(1).toLowerCase();
      }
      if (apellido) {
        apel = apellido[0].toUpperCase() + apellido.substr(1).toLowerCase();
      }
      if (ciudad) {
        ciud = ciudad[0].toUpperCase() + ciudad.substr(1).toLowerCase();
      }
      if (cosa) {
        Cosa = cosa[0].toUpperCase() + cosa.substr(1).toLowerCase();
      }
      if (fof) {
        Fof = fof[0].toUpperCase() + fof.substr(1).toLowerCase();
      }
      this.fbs.verificar2(nomb, apel, ciud, Cosa, Fof);

  }
  btnParo() {
      this.renderer.setAttribute(this.nombre.nativeElement, 'disabled', 'true'); // bloquear campos
      this.renderer.setAttribute(this.apellido.nativeElement, 'disabled', 'true'); // bloquear campos
      this.renderer.setAttribute(this.ciudad.nativeElement, 'disabled', 'true'); // bloquear campos
      this.renderer.setAttribute(this.cosa.nativeElement, 'disabled', 'true'); // bloquear campos
      this.renderer.setAttribute(this.fof.nativeElement, 'disabled', 'true'); // bloquear campos
  }

}
