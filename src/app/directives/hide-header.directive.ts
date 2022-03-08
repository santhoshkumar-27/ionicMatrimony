/* eslint-disable prefer-const */
import { Directive, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';
import * as $ from 'jquery';
@Directive({
  selector: '[appHideHeader]'
})
export class HideHeaderDirective implements OnInit {
  @Input('appHideHeader') toolbar: any;
  private toolBarHeight = 0;
  private previousValue = 0;
  private scroll = 0;
  constructor(
    private renderer: Renderer2,
    private domCtl: DomController) { }

  ngOnInit(): void {
    this.toolbar = this.toolbar.el;
    this.domCtl.read(() => {
      this.toolBarHeight = this.toolbar.clientHeight;
    });
    this.scroll = $('document').scrollTop();
    console.log('this is scroll', this.scroll);
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    // get the value from the scrollTop property
    const scrollTop = $event.detail.scrollTop;
    // if scrollTop is 0 reset the previousValue 0
    if (scrollTop === 0) {
      this.previousValue = 0;
    }
    // Assign the scrollTop to the previousValue if scrollTop is greater than previousValue
    if (scrollTop > this.previousValue) {
      this.previousValue = scrollTop;
    }
    // adding the style property if the scrolltop is greater than toolbarHeight
    if (scrollTop > this.toolBarHeight) {
      this.domCtl.write(() => {
        this.renderer.setStyle(this.toolbar, 'top', `-110px`);
      });
    }
    // if the scrollTop value is greater than previous value remove the style property
    if (scrollTop < this.previousValue) {
      this.domCtl.write(() => {
        this.renderer.setStyle(this.toolbar, 'top', '0px');
      });
    }
  }
}

