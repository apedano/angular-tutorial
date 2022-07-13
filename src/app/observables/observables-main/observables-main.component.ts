import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

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

  snippet6 = `
  const myPipedObservable = myObservable
  .pipe(
    filter(data => +data % 2 != 0), //filter even numbers
    map((dataFromObservable: number) => 'Round ' + (dataFromObservable +1)
    ));
  `;

  snippet7 = `
  this.myDateSubject = new Subject<Date>();

  this.myDateSubjectSubscription = 
      this.myDateSubject.subscribe(currentDate => {
        this.formattedDate = new DatePipe('en-US').transform(currentDate, 'dd/MM/YYYY HH:mm:ss:SSS');
      });  
  `;

  snippet8 = `
    onEmitNewDate(): void {
      this.myDateSubject.next(new Date());  
    } 
  `;

  intervalSubscription : Subscription;
  myObservableSubscription : Subscription;
  pipedMyObservableSubscription: Subscription;
  myDateSubjectSubscription: Subscription;

  countFromInterval: number;
  countFromMyObservable: number;
  valueFromMyPipedObservable: string;
  errorMyObservable: boolean = false;
  completeMyObservable: boolean = false;
  formattedDate: string;

  myDateSubject: Subject<Date>;

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
    //operators
    const myPipedObservable = myObservable
    .pipe(
      filter(data => +data % 2 != 0), //filter even numbers
      map((dataFromObservable: number) => 'Round ' + (dataFromObservable +1)
      ));
      
    this.pipedMyObservableSubscription = myPipedObservable
      .subscribe(data => this.valueFromMyPipedObservable = data)
    
    //subject
    this.myDateSubject = new Subject<Date>();

    this.myDateSubjectSubscription = 
      this.myDateSubject.subscribe(currentDate => {
        this.formattedDate = new DatePipe('en-US').transform(currentDate, 'dd/MM/YYYY HH:mm:ss:SSS');
      });

  }


  onEmitNewDate(): void {
    this.myDateSubject.next(new Date());  
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
    this.myObservableSubscription.unsubscribe();
    this.pipedMyObservableSubscription.unsubscribe();
    this.myDateSubjectSubscription.unsubscribe();
  }

  onCompletetMyObservable(): void {
    this.completeMyObservable = true;
  }

  onErrorMyObservable(): void {
    this.errorMyObservable = true;
  }

}
