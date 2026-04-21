import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  imports: [UserItem],
  templateUrl: './user-item.html',
  styleUrl: './user-item.css',
})
export class UserItem implements OnInit {
  @Input() name!: string; // <-- Aggiungi la notazione @input

  constructor() {
     // Rimuovi l'impostazione del nome
  }

  ngOnInit() {}
}
