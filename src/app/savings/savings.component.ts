import { Component, OnInit } from '@angular/core';
import { InterestService } from '../services/interest.service'

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  constructor(private interestService: InterestService) { }

  ngOnInit(): void {
  }

  //savings.component.ts
  Total: number;
  years: number;
  
  calculateinterest(): void {
    this.Total = this.interestService.calculateinterest(this.years);
  }
}

