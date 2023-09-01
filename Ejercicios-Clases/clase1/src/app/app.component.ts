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
  public btnCalcular = 'Calcular';
  public btnLimpiar = 'Limpiar cuadros de textos';


  public onClick(event: any): void {
    
    
  }
}
