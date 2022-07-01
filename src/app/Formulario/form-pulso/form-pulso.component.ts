import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-pulso',
  templateUrl: './form-pulso.component.html',
  styleUrls: ['./form-pulso.component.css']
})
export class FormPulsoComponent implements OnInit {


  
    pulsos: number = 0;
    tempoPulsos: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
