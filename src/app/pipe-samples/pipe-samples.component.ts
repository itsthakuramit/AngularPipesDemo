import { Component, OnInit } from '@angular/core';
import { Notes } from '../Models/notes';


@Component({
  selector: 'app-pipe-samples',
  templateUrl: './pipe-samples.component.html',
  styleUrls: ['./pipe-samples.component.css']
})
export class PipeSamplesComponent implements OnInit {

  constructor() { }
  searchNotes: any;
  // Date Pipes
  value = new Date('2019-03-01');
  // String Pipes
  name = "Dhinesh"
  // Custome Pipes
  
   NotesList = [
    {id: "twenty", title: "twenties",createDate:new Date(), status: 2},
    {id: "ten", title: "tens",createDate:new Date(), status: 1},
    {id: "five", title: "fives",createDate:new Date(), status: 5},
    {id: "one", title: "ones",createDate:new Date(), status: 1},
    {id: "quarter", title: "quarters",createDate:new Date(), status: 1},
    {id: "dime", title: "dimes", createDate:new Date(),status: 1},
    {id: "nickle", title: "nickles",createDate:new Date(), status: 2},
    {id: "penny", title: "pennies",createDate:new Date(), status: 1}
  ];

  ngOnInit(): void {
  }
 
}