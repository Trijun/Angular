import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.css']
})
export class Day2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ans=''
  crtans='west'
  result=true
  final=''
  
  rightanswer(correct:any){
    this.ans=correct.value
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
