import { Component, HostListener, ViewChild } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  public innerWidth: any;
  //User preference
  isDarkTheme = false;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  
  constructor(private observer: BreakpointObserver, private router: Router, private overlayContainer: OverlayContainer) {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    console.log('size resize : ' + this.innerWidth);
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log('size width : ' + this.innerWidth);
  }

  redirect(url) {
    window.open(url, "_blank");
  }

  f1() {
    window.open('/assets/cv-gpatruno.pdf', '_blank');
 } 

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 900px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    })
  }

  changeTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
    } else {
      this.overlayContainer
        .getContainerElement()
        .classList.remove('dark-theme');
    }
  }

}
