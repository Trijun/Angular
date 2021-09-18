import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day4',
  templateUrl: './day4.component.html',
  styleUrls: ['./day4.component.css']
})
export class Day4Component implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  public ans=''
  crtans='west'
  result=true
  final=''
  
  rightanswer(){
    if(this.ans===this.crtans){
      this.final='right'
      this.result=true
    }
    else{
      this.final='wrong'
      this.result=false
    }
  }

}
