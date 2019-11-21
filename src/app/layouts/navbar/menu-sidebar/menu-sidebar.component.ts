import { Component, OnInit, HostListener, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent {
  show = false;

  @Input() enableWhiteListing: boolean;

  constructor(private elementRef: ElementRef) { }


  @HostListener('document:click', ['$event.target'])
  clickOutside(targetElement) {
    const isInsideClicked = this.elementRef.nativeElement.contains(targetElement);

    if (this.enableWhiteListing) {
      const isWhiteListed = targetElement.classList.contains('whitelisted');
      if(!isInsideClicked && isWhiteListed) {
        console.log('not inside, is wl');
      }
    } else {
      console.log('not inside');
      this.toggle(false);

    }
  }


  toggle(show: boolean = !this.show) {
    this.show = show;
  }
}
