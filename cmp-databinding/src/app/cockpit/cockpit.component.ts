import { Component, OnInit, EventEmitter, Output, ViewChild , ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output("sCreated") serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();//generic type EventEmitter
  @Output("bpCreated") blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  
  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    console.log(nameInput);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value});

  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  constructor() { }

}
