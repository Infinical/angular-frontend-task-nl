import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'th[resizable]',
  templateUrl: './resizable.component.html',
  styleUrls: ['./resizable.component.css'],
})
export class ResizableComponent {
  constructor() {}
  // bind header width
  @HostBinding('style.width.px')
  width: number | null = null;
  //automatically update the width of the header
  onResize(width: any) {
    this.width = width;
  }
}
