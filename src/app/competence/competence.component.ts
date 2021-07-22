import { Component, OnInit , ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  step = 0;

  setStep(index: number) {
    this.step = index;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.accordion.closeAll();
  }

}
