import { AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements AfterViewInit {
@ViewChild('toolbar', {read: ElementRef}) toolBar: ElementRef;
  constructor() {}
  ngAfterViewInit() {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    console.log('toolbar native element', this.toolBar.nativeElement.offsetHeight);
    // console.log('this is si toll', this.toolBar.nativeElement.el.clientHeight);
  }
}
