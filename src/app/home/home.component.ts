import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = "Home page";
  color:string = "red";
  buttonDisabled = false;
  homeContent:string= "ddd";​

  constructor() { }

  ngOnInit(): void {
  }

  updateTitle() {
    this.title = 'titlul nou';
  }
}
