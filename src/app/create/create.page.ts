import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  providers: [DataService]
})
export class CreatePage implements OnInit {

  gameForm!: FormGroup; // Déclarez la propriété ici

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.gameForm = this.formBuilder.group({
      title: ['', Validators.required],
      platform: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  createGame() {
    if (this.gameForm.valid) {
      this.dataService.createGame(this.gameForm.value)
        .then(() => {
          this.router.navigate(['/list']);
        });
    }
  }

}