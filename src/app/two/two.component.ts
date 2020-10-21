import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  isFavorite: boolean;
  @Input() titleCase: string;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
