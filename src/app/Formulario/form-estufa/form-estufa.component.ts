import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-estufa',
  templateUrl: './form-estufa.component.html',
  styleUrls: ['./form-estufa.component.css']
})
export class FormEstufaComponent implements OnInit {

  valoresEstufa: string[] = [];
  valoresClima:string[] = [];
  
  
    dataHora: Date = new Date();
   
    temperatura: number = 0;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }


btnContinuar(){
  this.router.navigate(['/formulario/clima']);
}

}
