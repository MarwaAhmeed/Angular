import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  jobs: string[] = [
    'UI/UX DESIGN',
    'RESPONSIVE DESIGN',
    'WEB DESIGN',
    'MOBILE APP DESIGN',
  ];
  skills: any = [
    {
      name: 'HTML',
      status: '90%',
    },
    {
      name: 'CSS',
      status: '80%',
    },
    {
      name: 'Node.JS',
      status: '90%',
    },
    {
      name: 'REACT',
      status: '70%',
    },
    {
      name: 'ANGULAR',
      status: '60%',
    },
    {
      name: 'AdobeXD',
      status: '70%',
    },
    {
      name: 'Jquery',
      status: '95%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
