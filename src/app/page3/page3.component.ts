import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  showSidebar = true;

  constructor() {}

  ngOnInit() {

    if (window.innerWidth <= 600) {
      this.showSidebar = false;
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 600 && !this.showSidebar) {
        this.showSidebar = true;
      } else if (window.innerWidth === 600 && this.showSidebar) {
        this.showSidebar = false;
      }
    });

  }

  onToggle() {
    this.showSidebar = this.showSidebar ? false : true;
  }

}
