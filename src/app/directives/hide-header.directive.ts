/* eslint-disable prefer-const */
import { Directive, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appHideHeader]'
})
export class HideHeaderDirective implements OnInit {
  @Input('appHideHeader') toolbar: any;
  private toolBarHeight = 0;
  constructor(private renderer: Renderer2, private domCtl: DomController) { }
  ngOnInit(): void {
    this.toolbar = this.toolbar.el;
    this.domCtl.read(() => {
      this.toolBarHeight = this.toolbar.clientHeight;
    });
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    const scrollTop = $event.detail.scrollTop;
    let previousValue = 0;
    if(scrollTop > previousValue) {
      previousValue = $event.detail.scrollTop;
      console.log('previousValue', previousValue);
      this.domCtl.write(() => {
        this.renderer.setStyle(this.toolbar, 'top', `-100px`);
      });
    }
    if(true) {
      this.domCtl.write(() => {
        this.renderer.setStyle(this.toolbar, 'top', `0px`);
      });
    }
    console.log('this', scrollTop);
    // let newPosition = -(scrollTop / 5);
    // if (newPosition < -this.toolBarHeight) {
    //   newPosition = -this.toolBarHeight;
    // }
    this.domCtl.write(() => {
      this.renderer.setStyle(this.toolbar, 'top', `-100px`);
    });
  }
}

