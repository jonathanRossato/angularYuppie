import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-volume',
  templateUrl: './form-volume.component.html',
  styleUrls: ['./form-volume.component.css']
})
export class FormVolumeComponent implements OnInit {


    volumeInjetado: number = 0;
    volumeDrenado: number = 0;
    percDrenado: number = 0;
    ecDrenado: number = 0;
    ecInjetado: number = 0;
    phDrenado: number = 0;
    phInjetado: number = 0;
    

  constructor() { }

  ngOnInit(): void {
  }

}
