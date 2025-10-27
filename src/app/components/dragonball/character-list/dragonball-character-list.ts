import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './dragonball-character-list.html',
})
export class DragonballharacterList {
  listName = input.required<string>();
  characters = input.required<Character[]>();

}
