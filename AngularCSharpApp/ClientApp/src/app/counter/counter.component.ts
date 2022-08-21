import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public text: string = '';

  public incrementCounter() {
    this.currentCount++;
    this.currentCount % 2 === 0 ? this.text = 'I am countable' : this.text = 'I am uncountable';
  }
}
