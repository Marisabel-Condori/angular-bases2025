import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'add-character',
  imports: [],
  templateUrl: './add-character.html',
})
export class AddCharacter {
  name = signal('')
  power = signal(0)

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) { return; }

    console.log(`${this.name()} - ${this.power()}`);

    const newCharacter: Character = { id: 100, name: this.name(), power: this.power() }

   // this.characters.update(list => [...list, newCharacter]);
   console.log(newCharacter);
   
    this.resetFields();
  }

  resetFields() {
    this.name.set("")
    this.power.set(0)
  }
}
