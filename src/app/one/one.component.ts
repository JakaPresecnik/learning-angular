import { OneService } from './../one.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  title: string = 'Fast recap:';
  authors: string[];

  constructor(service: OneService) { 
    this.authors = service.getAuthors();
   }

  ngOnInit(): void {
  }

}
