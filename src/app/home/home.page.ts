import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imageUrl: string = 'assets/images/retro.jpg';
  imageUrl2: string = '/assets/images/retro2.jpg';

  constructor(private router: Router) { }

  navigateToList() {
    this.router.navigate(['/list']);
  }

}