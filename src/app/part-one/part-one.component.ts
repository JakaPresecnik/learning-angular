import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part-one',
  templateUrl: './part-one.component.html',
  styleUrls: ['./part-one.component.css']
})
export class PartOneComponent{
  title = 'learning-angular';
  liked = {
    isLiked: true,
    likesCount: 1
  }
}
