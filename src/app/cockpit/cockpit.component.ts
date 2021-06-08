import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
// import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName:string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string, serverContent: string}>() ;
  
  // newServerName = '';
// newServerContent= '';
@ViewChild('serverInputContent') serverInputContent : ElementRef;
// @ViewChild('serverNameInput') serverNameInput: HTMLInputElement;
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput : HTMLInputElement ) {
    // console.log(this.serverNameInput);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverInputContent.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput : HTMLInputElement) {
    // console.log(nameInput);
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverInputContent.nativeElement.value,
  });
}
}
