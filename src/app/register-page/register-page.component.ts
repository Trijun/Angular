import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router,ParamMap } from '@angular/router';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(userForm: any){
  console.log(userForm.value);
  // this.router.navigate(['registration-success-page'],{relativeTo: this.route})
  }

}
