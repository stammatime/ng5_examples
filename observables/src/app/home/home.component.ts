import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000).map((number: number) =>  number * 2);
    this.numbersObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      });

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first  package'); // emits data package
      }, 2000);
      setTimeout(() => {
        observer.next('second  package'); // emits data package
      }, 4000);
      setTimeout(() => {
        // observer.error('This does not work'); // emits data package
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third  package'); // emits data package
      }, 6000);
    });
    this.customObsSubscription = myObservable.subscribe(
      (data: string) => console.log(data),
      (error: string) => console.log(error),
      () => console.log('completed'));
  }

  ngOnDestroy() {
    this.customObsSubscription.unsubscribe();
    this.numbersObsSubscription.unsubscribe();
  }
}

