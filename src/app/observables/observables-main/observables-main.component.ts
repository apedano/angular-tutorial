import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables-main',
  templateUrl: './observables-main.component.html',
  styleUrls: ['./observables-main.component.css']
})
export class ObservablesMainComponent implements OnInit, OnDestroy {

  snippet1: string = `this.activatedRoute.params.subscribe(
    (params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    }
  );`;

  snippet2 = `interval(500).subscribe(count => this.countFromInterval = count);`;
  
  snippet3 = `intervalSubscription : Subscription;
  ...
  ngOnInit(): void {
    this.intervalSubscription = 
    interval(500).subscribe(count => this.countFromInterval = count);
  }
  ...
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
  `;

  snippet4 = `
  ngOnInit(): void {
    const myObservable = new Observable(observer => {
      let count = 0;
      setInterval(()=>{
        observer.next(count++);
        //observer.error();
        //observer.complete;
      }, 1000)  
    });
    this.myObservableSubscription = myObservable.subscribe(value => {
      this.countFromMyObservable = +value; 
    });
  }
  ...
  ngOnDestroy(): void {
    this.myObservableSubscription.unsubscribe();
  }
  `;

  snippet5 = `
  const myObservable = new Observable(observer => {
    let count = 0;
    setInterval(()=>{
      // observer.next(count++);
      if(this.errorMyObservable) {
        observer.error(new Error('Count is greater than 3'));
      } else if(this.completeMyObservable) {
        observer.complete();
      } else {
        observer.next(count++);
      }
    }, 1000)  
  });
  this.myObservableSubscription = myObservable.subscribe({
      next: (v) => this.countFromMyObservable = +v,
      error: (e) =>  alert('An error has been observed:' + e.message),
      complete: () => alert('MyObservable is complete)') 
  });
  `;


  intervalSubscription : Subscription;
  myObservableSubscription : Subscription;
  

  countFromInterval: number;
  countFromMyObservable: number;
  errorMyObservable: boolean = false;
  completeMyObservable: boolean = false;

  constructor() { }
  

  ngOnInit(): void {
    this.intervalSubscription = 
    interval(500).subscribe(count => this.countFromInterval = count);

    const myObservable = new Observable(observer => {
      let count = 0;
      setInterval(()=>{
        // observer.next(count++);
        if(this.errorMyObservable) {
          observer.error(new Error('Count is greater than 3'));
        } else if(this.completeMyObservable) {
          observer.complete();
        } else {
          observer.next(count++);
        }
      }, 1000)  
    });
    this.myObservableSubscription = myObservable.subscribe({
        next: (v) => this.countFromMyObservable = +v,
        error: (e) =>  alert('An error has been observed:' + e.message),
        complete: () => alert('MyObservable is complete!') 
    });
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
    this.myObservableSubscription.unsubscribe(); 
  }

  onCompletetMyObservable(): void {
    this.completeMyObservable = true;
  }

  onErrorMyObservable(): void {
    this.errorMyObservable = true;
  }

}
