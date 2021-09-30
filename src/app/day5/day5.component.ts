import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-day5',
  templateUrl: './day5.component.html',
  styleUrls: ['./day5.component.css']
})
export class Day5Component implements OnInit {
  @Output() greetEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  callParentGreet(){
    // alert("saying hi from child component");
    this.greetEvent.emit();
  }
}
