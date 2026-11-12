import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmptyList } from './components/empty-list/empty-list';
import { Navbar } from './components/navbar/navbar';

@Component({
  imports: [RouterOutlet, Navbar, EmptyList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('certificate-generator');
}
