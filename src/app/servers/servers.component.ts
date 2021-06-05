import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  encapsulation : ViewEncapsulation.Emulated,
})
export class ServersComponent implements OnInit {
  @Input('srvElement') element: {name: string, type: string, content: string};

  constructor() {

   }

  ngOnInit(): void {
    console.log(this.element)
  }

}
