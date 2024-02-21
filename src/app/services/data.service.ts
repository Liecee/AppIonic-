import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {Game} from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dbPath = '/games';
  GamesRef: AngularFirestoreCollection<Game>;


  constructor(
    private db: AngularFirestore
  ) { 
    this.GamesRef = db.collection(this.dbPath);
  }

  getAll() : any {
    return this.GamesRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewGame(Game: Game) : any {
    return new Observable(obs => {
      this.GamesRef.add({...Game}).then(() => {
        obs.next();
      });
    });
  }

  get(id: any):any {
    return  new Observable(obs => {
      this.GamesRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(Game:Game) {
    return new Observable(obs => {
      this.GamesRef.doc(Game.id).update(Game);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`games/${id}`).delete();
  }
}
