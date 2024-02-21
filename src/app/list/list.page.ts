import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListPage implements OnInit {
  games!: Array<Game>;

  constructor(
    private Game: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.Game.getAll().subscribe((data: any) => {
      this.games = data;
    });
  }

  onModif(id: any) {
    this.router.navigate(['/edit', id]);
  }

  onDelete(id: any) {
    this.Game.delete(id);
    this.router.navigate(['/list']);
  }

}