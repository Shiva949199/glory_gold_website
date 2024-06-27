import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {



  isNavbarExpanded: boolean = false;
  isScrolledDown: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop;
    if (offset > 0) {
      this.isScrolledDown = true;
      this.isNavbarExpanded = true;
    } else {
      this.isScrolledDown = false;
      this.isNavbarExpanded = false;
    }
  }

}
