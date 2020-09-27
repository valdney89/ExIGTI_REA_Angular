import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  resultado: number = 0;
  numeros: number[] = []
  
  constructor(){ }

  fazerOperacao(num1, num2, operacao){
    if(operacao === 'somar'){
      this.resultado = num1*1 + num2*1;
    } else if (operacao === 'subtrair') {
      this.resultado = num1*1 - num2*1;
    } else if (operacao === 'multiplicar') {
      this.resultado = num1*1 * num2*1;
    } else if (operacao === 'dividir') {
      this.resultado = num1*1 / num2*1;
    }
  }

}