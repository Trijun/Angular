import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.css']
})
export class Day3Component implements OnInit {

  displayName=false
  constructor() { }
  color="red";
  ngOnInit(): void {
  }

  names=["Keerthana","trijun","parkavi","suriya","Navin"]
}
