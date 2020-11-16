import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eight',
  templateUrl: './eight.component.html',
  styleUrls: ['./eight.component.css']
})
export class EightComponent implements OnInit {
  archives: object[] = [
    {year: 2020, month: 1},
    {year: 2020, month: 2},
    {year: 2020, month: 3}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
