import { Component, ViewChild, OnInit } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
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
