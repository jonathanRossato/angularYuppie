import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-clima',
  templateUrl: './form-clima.component.html',
  styleUrls: ['./form-clima.component.css']
})
export class FormClimaComponent implements OnInit {
  valoresClima:string[] = [];
  temperatura: number = 0;
  umidade: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
