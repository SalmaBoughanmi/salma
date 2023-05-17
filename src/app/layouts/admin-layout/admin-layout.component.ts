import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit() {

  }

  logout(){
    localStorage.clear()
    this.router.navigateByUrl("/login")

  }
}
