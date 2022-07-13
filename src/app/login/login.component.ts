import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName!: string;
  password!: string;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  onLogin() {
    if(this.userName === 'admin' && this.password ==='admin'){
      this.route.navigateByUrl('products');
    }else{
      alert('Wrong details')
    }
  }

}
