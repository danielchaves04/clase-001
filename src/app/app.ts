import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  subtitulo = 'Subtitulo';

  text = 'Variable Interpolada';
  saludar() {
    alert(18 + 34);
    this.text = 'NUEVO TEXTO 2';
  }
}
