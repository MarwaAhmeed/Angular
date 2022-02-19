import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headings',
  templateUrl: './headings.component.html',
  styleUrls: ['./headings.component.css']
})
export class HeadingsComponent implements OnInit {
  cardsList = [1,2,3]
  constructor() { }

  ngOnInit(): void {
  }

}
