import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {

  step = 0;

  setStep(index: number) {
    this.step = index;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
