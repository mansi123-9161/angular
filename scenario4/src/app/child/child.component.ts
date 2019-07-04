import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  fireEvent() {
    console.log('it is working');
    this.childEvent.emit('hey user! data is from child to parent component');
  }
}
