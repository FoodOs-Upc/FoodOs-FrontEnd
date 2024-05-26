import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  reports:number[];
  products:number[];
  provider:number[];

  constructor() {
    this.reports=[];
    this.products=[];
    this.provider=[];
  }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.products.push(1);
      this.provider.push(2);
      this.reports.push(3);
    }


  }

}
