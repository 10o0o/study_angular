import { Component } from '@angular/core';

import { LoggerService } from '../logger.service';

@Component({
  selector: 'spy-parent',
  templateUrl: './spy.component.html',
  providers:  [LoggerService]
})
export class SpyParentComponent {
  newName = 'Herbie';
  heros: string[] = ['Windstorm', 'Magneta'];

  constructor(public logger: LoggerService) {
  }

  addHero() {
    if (this.newName.trim()) {
      this.heros.push(this.newName.trim());
      this.newName = '';
      this.logger.tick();
    }
  }
  removeHero(hero: string) {
    this.heros.splice(this.heros.indexOf(hero), 1);
    this.logger.tick();
  }
  reset() {
    this.logger.log('reset');
    this.heros = [];
    this.logger.tick();
  }
}