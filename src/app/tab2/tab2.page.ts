import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DomController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild('toolbar', {static: true}) toolbar: any;
  constructor(
    private render: Renderer2,
    private domCtrl: DomController
  ) { }

  ngOnInit() {
    this.domCtrl.write(() => {
      this.render.addClass(this.toolbar.el, 'demo');
    });
  }
}
