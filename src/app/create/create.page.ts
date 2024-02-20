import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Game } from '../models/game.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  providers: [DataService]
})
export class CreatePage implements OnInit {
  public game!: Game;

  constructor(
    private Game: DataService,
    private toastCtrl: ToastController,
    private router : Router
  ) { }

  ngOnInit() {
    this.game = new Game();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau Jeu enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 2000);
    });
  }

  add() {
    this.Game.saveNewGame(this.game).subscribe(() => {
      this.game = new Game();
      this.presentToast();
    });
  }
}