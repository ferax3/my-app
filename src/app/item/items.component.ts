import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs';
import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  a: number;
  b: number;
  multiplesOf29: number;

  num1: number;
  num2: number;
  num3: number;
  result: number;

  constructor() {
    this.a = 1;
    this.b = 1000;
    this.num1 = 0;
    this.num2 = 0;
    this.num3 = 0;
    this.multiplesOf29 = 0;
    this.result = 0;
  }

  calculateMultiples() {
    console.log("calculateMultiples called with a:", this.a, "b:", this.b);
    let count = 0;
    for (let i = Number(this.a); i <= Number(this.b); i++) {
      if (i % 29 === 0 && i % 2 === 0 && i % 5 === 2) {
        count++;
        console.log("this number is ", i);
      }
    }
    this.multiplesOf29 = count;
    console.log("multiplesOf29:", this.multiplesOf29);
  }

  calculateSumOrSquares() {
    console.log("calculateSumOrSquares called with num1:", this.num1, "num2:", this.num2, "num3:", this.num3);

    // Приведення введених значень до чисел
    let num1 = Number(this.num1);
    let num2 = Number(this.num2);
    let num3 = Number(this.num3);

    console.log("Parsed values:", num1, num2, num3);

    if (num1 > 0 || num2 > 0 || num3 > 0) {
        // Якщо хоч одне з чисел додатне, знайти квадрат суми
        this.result = Math.pow(num1 + num2 + num3, 2);
        console.log("Square of sum:", this.result);
    } else {
        // В іншому випадку – сума квадратів
        this.result = Math.pow(num1, 2) + Math.pow(num2, 2) + Math.pow(num3, 2);
        console.log("Sum of squares:", this.result);
    }
}
  ngOnInit(): void{

  }
}
