import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(
    public router:Router
  ) { }
  next() {
    // Navigasi ke halaman DetailPage
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
