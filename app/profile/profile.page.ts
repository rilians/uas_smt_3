import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  constructor(public router:Router) { }

  out() {
    // Navigasi ke halaman DetailPage
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
