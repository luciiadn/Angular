import { Component } from '@angular/core';
import { students } from './models/students';

@Component({
  selector: 'app-content-space',
  templateUrl: './content-space.component.html',
  styleUrls: ['./content-space.component.css']
})
export class ContentSpaceComponent {

  students: students[] = [
    new students ('Axl' 'Rose' new Date ('61'), true),
    new students ('Izzy' 'Stradlin' new Date ('60'), false),
    new students ('Norma' 'Mortenson' new Date ('36'), false),
    new students ('Emma' 'Watson' new Date ('32'), true),
  ] 

  constructor () {}
  
  ngOnInit(): void {

  }
}
