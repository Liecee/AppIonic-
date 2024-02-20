import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  providers: [DataService],
})
export class ListPage implements OnInit {
  games!: Array<Game>;

  constructor(
    private Game: DataService,
  ) { }

  ngOnInit() {
    this.Game.getAll().subscribe((data: any) => {
      this.games = data;
    });
  }}