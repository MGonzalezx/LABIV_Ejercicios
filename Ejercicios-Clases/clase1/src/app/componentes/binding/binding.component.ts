import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {
  public name: any = 'Angular';
  public apellido: string = '';
  public btnLabel = 'Click me';


  public onClick(event: any): void {
    console.log(event);
    this.name = Math.random()?.toString();
    
  }

}
