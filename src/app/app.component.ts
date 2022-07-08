import { Component, OnInit } from '@angular/core';
import { UserInterface } from './user-interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private userInterface:UserInterface){}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'sim-card';
}
