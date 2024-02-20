import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Méthode pour créer un nouveau jeu
  createGame(gameData: any): Promise<void> {
    // Faites une requête HTTP ou appelez une méthode pour créer un nouveau jeu dans votre base de données ou votre API
    // Par exemple, une requête HTTP POST vers une API
    return this.http.post<void>('/api/games', gameData).toPromise();
  }

  // Méthode pour mettre à jour les détails d'un jeu
  updateGame(gameId: string, updatedGameData: any): Promise<void> {
    // Faites une requête HTTP ou appelez une méthode pour mettre à jour les données du jeu dans votre base de données ou votre API
    // Par exemple, une requête HTTP PUT vers une API
    return this.http.put<void>(`/api/games/${gameId}`, updatedGameData).toPromise();
  }

  // Méthode pour récupérer les détails d'un jeu par son ID
  getGame(gameId: string): Observable<Game> {
    // Faites une requête HTTP ou appelez une méthode pour récupérer les données du jeu depuis votre base de données ou votre API
    // Par exemple, une requête HTTP GET vers une API
    return this.http.get<Game>(`/api/games/${gameId}`);
  }
}
