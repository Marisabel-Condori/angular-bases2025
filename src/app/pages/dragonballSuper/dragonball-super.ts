import { Component, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DragonballharacterList } from '../../components/dragonball/character-list/dragonball-character-list';
import { AddCharacter } from "../../components/add-character/add-character";

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super.html',
  imports: [DragonballharacterList, AddCharacter],
})
export class DragonballSuper {

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
  ]);

}
