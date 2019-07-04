import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl:  './test.component.html',
      styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
public name = 'user1';
public myId = 'testuser';
public scene2 = '';
  constructor() { }

  ngOnInit() {
  }
onClick() {
  console.log('{{welcome}}');
}
printData(value)
{
  console.log(value);
}
}
