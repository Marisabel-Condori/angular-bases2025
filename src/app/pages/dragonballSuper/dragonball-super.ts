import { DragonballService } from './../../services/dragonball.service';
import { Component, inject } from '@angular/core';
import { DragonballharacterList } from '../../components/dragonball/character-list/dragonball-character-list';
import { AddCharacter } from '../../components/add-character/add-character';

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super.html',
  imports: [DragonballharacterList, AddCharacter],
})
export class DragonballSuper {
  public dragonballService = inject(DragonballService);
}
