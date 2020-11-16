import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eight-a',
  templateUrl: './eight-a.component.html',
  styleUrls: ['./eight-a.component.css']
})
export class EightAComponent implements OnInit {
  year: number;
  month: number;

  viewAll() {
    this.router.navigate(['/part3']);
  }
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.year = +params.get('year');
      this.month = +params.get('month');
    })
  }

}
