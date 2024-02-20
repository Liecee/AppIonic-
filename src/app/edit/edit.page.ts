import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Game } from '../models/game.model';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  gameForm: FormGroup = new FormGroup({});

  game: Game = { title: '', platform: '', description: '',id: '',}

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  gameId!: string;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
        this.gameId = id;
        this.dataService.get(this.gameId).subscribe((game: Game | undefined) => {
          if (game !== undefined) {
            this.game = game;
            this.initializeForm();
          } else {
            // Gérer le cas où le jeu n'est pas trouvé
            console.log("Jeu non trouvé");
          }
        });
    } else {
        // Gérer le cas où l'ID est null
    }
  }

  initializeForm() {
    this.gameForm = this.formBuilder.group({
      title: [this.game.title, Validators.required],
      platform: [this.game.platform, Validators.required],
      description: [this.game.description, Validators.required]
    });
  }

  updateGame() {
    
    if (this.gameForm.valid) {
     
      this.dataService.update(this.game);
    }
  }}
