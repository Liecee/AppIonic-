import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private gamesCollection: AngularFirestoreCollection<any>;
  private games: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.gamesCollection = firestore.collection<any>('games');
    this.games = this.gamesCollection.valueChanges();
  }

  getGames(): Observable<any[]> {
    return this.games;
  }

  createGame(game: any) {
    return this.gamesCollection.add(game);
  }

  updateGame(gameId: string, game: any) {
    return this.gamesCollection.doc(gameId).update(game);
  }

  deleteGame(gameId: string) {
    return this.gamesCollection.doc(gameId).delete();
  }

}