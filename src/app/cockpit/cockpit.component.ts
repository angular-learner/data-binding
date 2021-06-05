import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
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
newServerContent= '';

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    console.log(nameInput);
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
  });
}
}
