import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent {
  @Input() isLiked: boolean;
  @Input() likesCount: number;

  toggleLike() {
    this.isLiked ? this.likesCount-- : this.likesCount++;
    this.isLiked = !this.isLiked;
  }
}
