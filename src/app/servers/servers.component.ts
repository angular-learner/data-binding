import { Component, Input, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef, } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  encapsulation : ViewEncapsulation.Emulated,
})
export class ServersComponent implements OnInit ,AfterViewInit {
  @Input('srvElement') element: {name: string, type: string, content: string};
  @ViewChild('heading' , {static: true}) header: ElementRef;
  // @ViewChild('heading') header: ElementRef;

  constructor() {

   }

  ngOnInit() {
    console.log('ngOnInit called')
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log(this.header.nativeElement.textContent);
  }

}
