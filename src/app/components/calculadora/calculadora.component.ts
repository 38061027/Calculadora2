import { Component, ElementRef, } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent{


  constructor(private element:ElementRef){}

  insert(num: string): void {
    var numero = this.element.nativeElement.querySelector('#resultado').innerHTML;
    this.element.nativeElement.querySelector('#resultado').innerHTML = numero + num;
  }

  clean(): void {
    this.element.nativeElement.querySelector('#resultado').innerHTML = "";
  }

  back(): void {
    var resultado = this.element.nativeElement.querySelector('#resultado').innerHTML;
    this.element.nativeElement.querySelector('#resultado').innerHTML = resultado.substring(0, resultado.length - 1);
  }

  calcular(): void {
    var resultado = this.element.nativeElement.querySelector('#resultado').innerHTML;
    if (resultado) {
      this.element.nativeElement.querySelector('#resultado').innerHTML = eval(resultado);
    } else {
      this.element.nativeElement.querySelector('#resultado').innerHTML = "Nada...";
    }
  }
}






