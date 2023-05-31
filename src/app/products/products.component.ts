import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  departments = [
    'Mountain Bicycles',
    'Road Bicycles',
    'Hybrid Bicycles',
    'Bicycle Pumps',
  ];

  employees = [
    {
      name: 'Sharan',
      employeeID: 101,
      department: 'IT',
    },
    {
      name: 'Kumar',
      employeeID: 102,
      department: 'Mech',
    },
    {
      name: 'Reddy',
      employeeID: 103,
      department: 'Civil',
    },
  ];
  //  Another type of generate random numbers
  generateRandomNumber:number;

  constructor( ){
    this.generateRandomNumber=this.gRandomNumber(1,999)
  }
  gRandomNumber(min:number, max:number): number{
    return Math.floor(Math.random() * (max-min +1)) + min;
  }

  genRandomNumbers(): number[] {
    const randomNumbers: number[] = [];
    const numberOfRandomNumbers = 10; // Change this to the desired number of random numbers
  
    for (let i = 0; i < numberOfRandomNumbers; i++) {
      const randomNumber = Math.random();
      randomNumbers.push(randomNumber);
    }
  
    return randomNumbers;
  }
  
  rNum: number[] = [];

  ngOnInit() {
    this.rNum = this.genRandomNumbers();
  }
  
}
