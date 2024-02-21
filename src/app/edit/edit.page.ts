import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Game } from '../models/game.model';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
    game!: Game;
  
    constructor(
      private alertCtrl : AlertController,
      private route: ActivatedRoute,
      private Game: DataService,
      private toastCtrl: ToastController,
      private router: Router
    ) { }
  
    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      this.Game.get(id).subscribe((value: Game) => {
        this.game = value;
      });
    }
  

    async presentToast() {
      const toast = this.toastCtrl.create({
        message: 'Vos modifications sont enregistrées',
        duration: 2000
      });
      (await toast).present().then(() => {
        setTimeout(() => {
          this.router.navigate(['/list']);
        }, 2000);
      });
    }
  
    onModif() {
      this.Game.update(this.game).subscribe(() => {
        this.presentToast();
      });
    }
  }