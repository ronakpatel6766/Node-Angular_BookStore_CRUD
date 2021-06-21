import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  //PageContetnt of main HomePage
  pageContent = {
    header:{
      title :'My Book list',
      body : 'This is a List of Books I like most'
    }
    };
}