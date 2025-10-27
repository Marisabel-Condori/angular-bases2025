import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page.component',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(30);

  heroDescription = computed(() => {
    return `${ this.name() } - ${ this.age() }`;
  })
  capitalizedName = computed(() => {
    return this.name().toUpperCase()
  })

  changeHero(){
    this.name.set('Spiderman')
    this.age.set(22)
  }

  resetForm(){
    this.name.set('Ironman')
    this.age.set(30)
  }

  changeAge(){
    this.age.set(60)
  }

}
