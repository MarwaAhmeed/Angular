import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-sec',
  templateUrl: './hero-sec.component.html',
  styleUrls: ['./hero-sec.component.css']
})
export class HeroSecComponent implements OnInit {
  userName :string="Marwa Ahmed";
  title :string=" WEB Developer & Design"
  constructor() { }

  ngOnInit(): void {
  }

}
