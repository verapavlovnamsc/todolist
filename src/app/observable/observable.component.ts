import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})

export class ObstutComponent {
  observ$: Observable<number>;
  constructor() {
    this.observ$ = new Observable(observer => {
      let value = 0;
      const interval = setInterval(() => {
        observer.next(value);
        value++;
      }, 100);

      return () => clearInterval(interval);
    });
  }

  getValuesFromObs() {
    this.observ$.subscribe(x => console.log(x));
  }
}
