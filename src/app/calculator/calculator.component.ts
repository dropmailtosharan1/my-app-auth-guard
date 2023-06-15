import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  resultNumber:number | undefined;

  result: string = '';

  appendNumber(num: number) {
    this.result += num.toString();
  }

  appendOperator(operator: string) {
    this.result += operator;
  }

  appendDecimal() {
    if (!this.result.includes('.')) {
      this.result += '.';
    }
  }

  calculate() {
    try {
      this.result = eval(this.result);
    } catch (error) {
      this.result = 'Error';
    }
  }

  clear() {
    this.result = '';
  }

  backspace() {
    this.result = this.result.slice(0, -1);
  }
  constructor() {}


  add(v1:string,v2:string){
    this.resultNumber=parseFloat(v1)+parseFloat(v2);
  }
  substract(v1:string,v2:string){
    this.resultNumber=parseFloat(v1)-parseFloat(v2);
  }

  number1: any;
  number2: any;

  addNumber() {
    if (this.number1 && this.number2) {
      this.resultNumber = parseFloat(this.number1) + parseFloat(this.number2);
    }
  }

  subtractNumber() {
    if (this.number1 && this.number2) {
      this.resultNumber = parseFloat(this.number1) - parseFloat(this.number2);
    }
  }
}
