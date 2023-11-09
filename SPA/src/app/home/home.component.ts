import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  registerMode = false;
  users: any;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  registerToggle(): void{
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean): void{
    this.registerMode = event;
  }
}
