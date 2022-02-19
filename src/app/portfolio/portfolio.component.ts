import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioSEc1 :string[]=["WEB Design","Mobile Design","LOGO Design"]
  portfolioSEc2 :string[]=["WEB APP","Mobile APP","LOGO APP"]
  constructor() { }

  ngOnInit(): void {
  }

}
