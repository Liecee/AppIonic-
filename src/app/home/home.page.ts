import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imageUrl: string = 'assets/images/pokemon.jpg';

  constructor(private router: Router) { }

  navigateToList() {
    this.router.navigate(['/list']);
  }

}