import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.html',
})
export class Dragonball {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 100 },
    { id: 1, name: 'Vegeta', power: 100 },
    { id: 1, name: 'Picolo', power: 100 },
  ]);
}
