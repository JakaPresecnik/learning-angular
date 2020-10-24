import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent {
  @Input('title') title: string;
  isColapse: boolean = true;

  toggleColapse() {
    this.isColapse = !this.isColapse;
  }

}
