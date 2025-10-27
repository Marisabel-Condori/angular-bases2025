import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',

  // imports: [NgClass],
  templateUrl: './dragonball.html',
})
export class Dragonball {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 1, name: 'Vegeta', power: 8000 },
    { id: 1, name: 'Picolo', power: 3000 },
    { id: 1, name: 'Yamcha', power: 500 },
  ]);

  //para la forma ngClass
  // powerClases = computed(() => {
  //   return {'text-danger': true}
  // })
}
