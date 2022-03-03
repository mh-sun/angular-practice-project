import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private serv:AuthService) { }

  ngOnInit(): void {
  }

  logIn(){
    this.serv.ChildLogin()
  }

  logOut(){
    this.serv.ChildLogout()
  }

}
