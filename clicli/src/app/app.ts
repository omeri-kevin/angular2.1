import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorld } from './hello-world/hello-world';
import { UserItem } from './user-item/user-item';
import { UserList } from './user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorld, UserItem,UserList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   title = 'app';
}
