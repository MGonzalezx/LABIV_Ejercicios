import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clase1';
  public edadUno: number = 0;
  public edadDos: number = 0;
  public suma: number = 0;
  public promedio: number = 0;
  isDisabled: boolean = true;
  public btnCalcular = 'Calcular';
  public btnLimpiar = 'Limpiar cuadros de textos';


  public onClick(event: any): void {
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma/2;
    
  }

  public onClickLimpiar(event: any): void {
    this.suma = 0;
    this.promedio = 0;
    this.edadUno = 0;
    this.edadDos = 0;
    
  }
}
