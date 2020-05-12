import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personajes = [];

  cargarDatos() {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => {
        return response.json()
      })
      .then((characters) => {
        this.personajes = characters.results
        console.log(this.personajes)
      })
      .catch((error) => {
          console.error('Error: ', error)
      })
  }
}
