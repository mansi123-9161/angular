import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {
  public scene2 = '';

  @Input() public varb;

  constructor() { }

  ngOnInit() {
  }

}
