import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  providers: [DataService],
})
export class ListPage implements OnInit {

  games: any[] = []; // Ajoutez cette propriété pour stocker les jeux
  dataService: any;
  router: any;

  ngOnInit() {
    // Ajoutez cette méthode pour récupérer les jeux à partir du service DataService
    this.dataService.getGames().subscribe((games: any[]) => {
      this.games = games;
    });
  }

  navigateToCreate() {
    // Ajoutez cette méthode pour naviguer vers la page de création
    this.router.navigate(['/create']);
  }

  navigateToEdit(gameId: string) {
    // Ajoutez cette méthode pour naviguer vers la page de modification
    this.router.navigate(['/edit', gameId]);
  }

  deleteGame(gameId: string) {
    // Ajoutez cette méthode pour supprimer un jeu
    this.dataService.deleteGame(gameId);
  }
}