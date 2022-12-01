import { Component } from '@angular/core';
import { students } from './models/students';

@Component({
  selector: 'app-content-space',
  templateUrl: './content-space.component.html',
  styleUrls: ['./content-space.component.css']
})
export class ContentSpaceComponent {

  students: students[] = [
    new students ('Axl', 'Rose', new Date('1962-02-06'), true),
    new students ('Izzy','Stradlin' , new Date('1962-04-08'), false),
    new students ('Norma', 'Mortenson' , new Date('1926-06-01'), false),
    new students ('Emma', 'Watson', new Date('1990-04-15'), true),
  ] 

  constructor () {}
  
  ngOnInit(): void {
    

  }
}
