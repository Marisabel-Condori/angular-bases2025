import { Component } from "@angular/core";

@Component({
    template: `
    <h1>Counter: {{counter}}</h1>
    <button (click)="increaceBy(1)">+1</button>
    `
})
export class CounterPageComponent{
    counter = 10
    increaceBy(value: number){
        this.counter += value
    }
}