import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  customerName='Sharan';
  email:any;
  password:any;
  constructor() {}

  onSubmit(form:NgForm){
    console.log(form.value);
  }
}
