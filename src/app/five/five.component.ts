import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {
  categories = [
    {id: 1, name: 'Development'},
    {id: 2, name: 'Art'},
    {id: 3, name: 'Languages'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
